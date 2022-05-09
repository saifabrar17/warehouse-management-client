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
                                    <input type="text" placeholder='Add Stock Quantity' className='input-height' name='restock' />
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







        // <div className='container product-detail-cont'>
        //     <h2 className='pt-3 text-center'>Product Details</h2>
        //     <div className="product-detail-card border  mx-auto">
        //         <div className='d-flex justify-content-center'>
        //             <img className='rounded pd-img' src={product.img} alt="product_image" />
        //         </div>
        //         <h4 className='py-2 '>{product.name}</h4>
        //         <div className='d-flex  justify-content-between'>
        //             <h5>Price: TK {product.price}</h5>
        //             <h5>Quantity: {product.quantity}</h5>
        //         </div>
        //         <p>Supplier: {product.supplier}</p>
        //         <div className="description">
        //             <p>{product.description}</p>
        //         </div>
        //         <div className='d-flex justify-content-between'>
        //             <div>
        //             <form  onSubmit={handleRestock}>
        //                 <input type="text" placeholder='Add Stock Quantity' className='input-height' name='restock' />
        //                 <input type="submit" value="Restock" className='btn ms-1 btn-success'/>
        //             </form>
        //             </div>
        //             <button className='btn btn-danger' onClick={handleDeliver}>Deliverd</button>
        //         </div>
        //         <div className='text-center pt-5 pb-3'>
        //         <Link className='btn btn-success' to={'/manage_products'}>Manage All Inventory Items</Link>
        //         </div>
        //     </div>



        // </div>
    );
};

export default ProductDetail;