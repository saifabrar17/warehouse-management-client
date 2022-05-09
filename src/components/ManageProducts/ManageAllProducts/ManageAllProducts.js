import React from 'react';
import { Link } from 'react-router-dom';
import useProducts from '../../Hooks/useProducts';
import './ManageAllProducts.css';
const ManageAllProducts = () => {
    const [products, setProducts] = useProducts([]);

    const handleDelete = id => {
        const proceed = window.confirm('Delete?');
        if (proceed) {
            const url = `https://vast-fjord-97111.herokuapp.com/product/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data);
                    const remaining = products.filter(product => product._id !== id)
                    setProducts(remaining);
                })

        }
    }

    return (
        <div className=' manage-products-container mx-auto'>
            <h2 className='text-center py-3'>Manage Products</h2>

            <Link className='btn btn-success my-3' to={'/add_new_product'}>Add New Item</Link>


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
                                <p className='me-2'>Units: {product.quantity}</p>
                                <button className='btn btn-danger' onClick={() => handleDelete(product._id)}>Delete Item</button>
                            </div>
                        </div>
                    </div>
                </div>)
            }

            {/* {
                products.map(product => <ProductsList
                key={product._id}
                product={product}
                ></ProductsList>)
            } */}
        </div>
    );
};

export default ManageAllProducts;