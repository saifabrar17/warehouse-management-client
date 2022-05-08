import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './ProductDetail.css';

const ProductDetail = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState({});
    const [item, setItem] = useState({});
    const url = `http://localhost:5000/product/${productId}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [url])
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data))
    }, [url, setItem]);
    // console.log(product);

    const handleDeliver = () => {
        const { quantity, ...rest } = item;
        const newQuantity = JSON.stringify(quantity - 1);
        const newItemValue = { quantity: `${newQuantity}`, ...rest };
        setItem(newItemValue);

        fetch(url, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ newItemValue })
        })
            .then(res => res.json())
            .then(data => setItem(data));

    }
    const handleRestock = (event) => {
        // event.preventDefault();
        const value = parseInt(event.target.restock.value);
        const { quantity, ...rest } = item;
        const newQuantity = parseInt(quantity) + value;
        const newItemValue = { quantity: `${newQuantity}`, ...rest };
        setItem(newItemValue);
        fetch(url, {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ newItemValue })
        })
            .then(res => res.json())
            .then(data => setItem(data));
    }

    return (
        <div className='container product-detail-cont'>
            <h2 className='py-3 text-center'>Product Details</h2>
            <div className="product-detail-card  w-50 mx-auto">
                <div className='d-flex justify-content-center'>
                    <img className='rounded' src={product.img} alt="product_image" />
                </div>
                <h4 className='py-2 '>{product.name}</h4>
                <div className='d-flex justify-content-between'>
                    <h5>Price: ${product.price}</h5>
                    <h5>Quantity: {product.quantity}</h5>
                </div>
                <p>Supplier: {product.supplier}</p>
                <div className="description">
                    <p>{product.description}</p>
                </div>
                <div className='d-flex justify-content-between'>
                    <div>
                    <form  onSubmit={handleRestock}>
                        <input type="text" placeholder='Add Stock Quantity' className='input-height' name='restock' />
                        <input type="submit" value="Restock" className='btn ms-1 btn-success'/>
                    </form>
                    </div>
                    <button className='btn btn-danger' onClick={handleDeliver}>Deliverd</button>
                </div>
                <div className='text-center pt-5 pb-3'>
                <Link className='btn btn-success' to={'/manage_products'}>Manage All Inventory Items</Link>
                </div>
            </div>



        </div>
    );
};

export default ProductDetail;