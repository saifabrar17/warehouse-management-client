import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({product}) => {

    const {name, img, description, price} = product;

    return (
        <div>
            <div className="card card-custom">
                        <img src={img} className="card-img-top rounded" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">{name}</h5>
                                <p className="card-text">{price}</p>
                                <p className="card-text">{description}</p>
                                <Link className='btn btn-primary' to='/checkout'>Book Now</Link> 
                            </div>
                    </div>
        </div>
    );
};

export default Product;