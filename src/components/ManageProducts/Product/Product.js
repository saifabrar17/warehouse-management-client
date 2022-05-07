import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = ({product}) => {
    const navigate = useNavigate();
    const {_id, name, img, quantity, description, price} = product;


    const navigateToServiceDetail = (_id) =>{
        navigate(`/product/${_id}`);
    }


    return (
        <div>
            <div className="card card-custom">
                        <img src={img} className="card-img-top rounded" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">{name}</h5>
                                <p className="card-text">{price}</p>
                                <p className="card-text">{description}</p>
                                <p className="card-text">{quantity}</p>

                                <button onClick={() => navigateToServiceDetail(_id)} 
                                className='btn btn-primary'>Update</button>
                            </div>
                    </div>
        </div>
    );
};

export default Product;