import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './ProductDetail.css';

const ProductDetail = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState({});
    const [item, setItem] = useState({});
    const url = `https://vast-fjord-97111.herokuapp.com/product/${productId}`;
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
            window.location.reload();
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
        <div className="container product-detail-container">
            <h2 className='py-3 font-weight-bold text-center'>Product Details</h2>
            <div className="container">
                <div className="row">
                    <div className="col-md-5 d-flex align-items-center justify-content-center">
                        <div className="product-image d-flex align-items-center justify-content-center">
                            <img src={product.img} className='img-fluid' alt="" />
                        </div>
                    </div>
                    <div className="col-md-7">
                        <h4 className='py-2 p-name'>{product.name}</h4>
                        <div className='d-flex'>
                            <p className='p-price'>Price: <span>TK {product.price}</span></p>
                            <p className='p-price ms-3'>Available: <span>{product.quantity} Units</span></p>
                        </div>
                        <p className='p-price p-sup'>Supplier: <span>{product.supplier}</span></p>
                        <div className="description">
                            <p>{product.description}</p>
                        </div>
                        <div className='d-flex'>
                            <div>
                                <form onSubmit={handleRestock}>
                                    <input type="text" placeholder='Add Stock Quantity' className='input-height' name='restock' required/>
                                    <input type="submit" value="Restock" className='btn ms-1 btn-success' />
                                </form>
                            </div>
                            <button className='btn btn-danger ms-2' onClick={handleDeliver}>Deliverd</button>
                        </div>
                        <div className='text-center pt-5 pb-3'>
                            <Link className='btn btn-success' to={'/manage_products'}>Manage All Inventory Items</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;