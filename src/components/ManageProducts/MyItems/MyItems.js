// import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
const MyItems = () => {
    const [products, setProducts] = useState([]);
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    const url = `http://localhost:5000/myProducts?email=${user.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [setProducts]);


    const handleDelete = id => {
        const proceed = window.confirm('Delete?');
        if (proceed) {
            const url = `http://localhost:5000/product/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    const remaining = products.filter(product => product._id !== id)
                    setProducts(remaining);
                })

        }
    }
    const navigateToProductDetail = (_id) =>{
        navigate(`/inventory/${_id}`);
    }
    return (
        <div className=' manage-products-container mx-auto'>
            <h2 className='text-center py-3'>My Items</h2>
            {/* <h3>{products.length}</h3> */}
            <Link className='btn btn-success my-3' to={'/add_new_product'}>Add New Item</Link>
            <div>
                {
                    products.map(product => <div
                        key={product._id}>
                        <div className='product-list'>
                            <div className="d-flex product-list-each justify-content-between">
                                <div className='d-flex'>
                                    <img className='mini-img rounded-circle me-2' src={product.img} alt="" />
                                <p className='d-flex align-items-center'>{product.name}</p>
                                </div>
                                <div className='my-items-btn-div'>
                                <button onClick={() => navigateToProductDetail(product._id)}
                                    className='btn me-2 btn-primary'>Update</button>
                                <button className='btn btn-danger' onClick={() => handleDelete(product._id)}>Delete Item</button>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>

        </div>
    );
};

export default MyItems;