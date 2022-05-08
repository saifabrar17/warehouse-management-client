import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Product.css';
const Product = ({ product }) => {
    const navigate = useNavigate();
    const { _id, name, img, quantity, description, price } = product;


    const navigateToProductDetail = (_id) => {
        navigate(`/inventory/${_id}`);
    }


    return (
        <div>
            <div className="card card-custom">
                <div className="d-flex justify-content-center">
                    <img src={img} className="card-img-top rounded" alt="..." />
                </div>
                <div className="card-body">
                    <h5 className="card-title mb-1">{name}</h5>
                    <p className="card-text mb-1">Price: {price}TK</p>
                    <p className="card-text mb-1">{description.slice(0, 80)}...</p>
                    <p className="card-text mb-1">Available: {quantity} Units</p>

                    <button onClick={() => navigateToProductDetail(_id)}
                        className='product-card-btn-position btn btn-primary'>Update</button>
                </div>
            </div>
        </div>
    );
};

export default Product;