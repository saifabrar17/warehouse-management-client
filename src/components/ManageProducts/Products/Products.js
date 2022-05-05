import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Products.css';


const Products = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])

    return (
        <div className="container">
            <div className="row">
                <div className="col-12 py-5 text-center">
                    <h2>Our Products</h2>
                </div>
            </div>
            <div className='products-mapped'>
                {
                    products.map(product => <Product
                    key={product.id}
                    product={product}
                    ></Product>)
                }
            </div>
        </div>
    );
};

export default Products;