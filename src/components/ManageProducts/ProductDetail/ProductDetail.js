import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const ProductDetail = () => {

    const { productId } = useParams();
    const [product, setProduct] = useState({});
    const [item, setItem] = useState([]);

    useEffect(() => {
        const url = `http://localhost:5000/product/${productId}`;

        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])
    // console.log(product);

    const handleDeliver = () => {
        const url = `http://localhost:5000/product/${productId}`;
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
        event.preventDefault();
        const value = parseInt(event.target.restock.value);
        const { quantity, ...rest } = item;
        const newQuantity = parseInt(quantity) + value;
        const newItemValue = { quantity: `${newQuantity}`, ...rest };
        setItem(newItemValue);
        const url = `http://localhost:5000/product/${productId}`;
        fetch(url, {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ newItemValue })
        })
            .then(res => res.json())
            .then(data => setItem(data));
    }

    return (
        <div>
            <h2>Product details</h2>
            <h4>Name: {product.name}</h4>
            <h4>Quantity: {product.quantity}</h4>

            <button className='btn btn-danger' onClick={handleDeliver}>Deliverd</button>
            <form onSubmit={handleRestock}>
                <input type="number" placeholder='restock' name='restock' />
                <input type="submit" value="Restock" />
            </form>
        </div>
    );
};

export default ProductDetail;