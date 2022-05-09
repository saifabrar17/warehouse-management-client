import React, { useEffect, useState } from 'react';
import Product from '../../ManageProducts/Product/Product';

const LowStock = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/running_out')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])

    return (
        <div className='manage-products-container mx-auto'>

            <h2 className='text-center text-danger pt-5 pb-3'>Low In Stock</h2>

            {
                products.map(product => <div
                    key={product._id}>
                    <div className='product-list'>
                        <div className="d-flex product-list-each justify-content-between">
                            <div className='d-flex'>
                                <img src={product.img} alt="" />
                                <p className='d-flex ms-2 align-items-center'>{product.name}</p>
                            </div>
                            <div className='d-flex justify-content-center align-items-center'>
                                <p className='me-2'>Only Available: {product.quantity}</p>
                            </div>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default LowStock;