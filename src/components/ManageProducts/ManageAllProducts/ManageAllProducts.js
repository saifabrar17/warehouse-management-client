import React from 'react';
import { Link } from 'react-router-dom';
import useProducts from '../../Hooks/useProducts';
import ProductsList from '../ProductsList/ProductsList';
import './ManageAllProducts.css';
const ManageAllProducts = () => {
    const [products, setProducts] = useProducts([]);

    

    return (
        <div className='w-50 manage-products-container mx-auto'>
            <h2 className='text-center py-3'>Manage Products</h2>
            
            <Link className='btn btn-success my-3' to={'/add_new_product'}>Add New Item</Link>
            
            {
                products.map(product => <ProductsList
                key={product._id}
                product={product}
                ></ProductsList>)
            }
        </div>
    );
};

export default ManageAllProducts;