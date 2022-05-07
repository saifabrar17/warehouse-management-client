import React from 'react';
import useProducts from '../../Hooks/useProducts';
import './ProductsList.css';


const ProductsList = ({ product }) => {

    const [products, setProducts] = useProducts([]);
    // const {_id, name, img, quantity, description, price} = product;

    const handleDelete = id => {
        const proceed = window.confirm('Delete?');
        if (proceed) {
            const url = `http://localhost:5000/product/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = products.filter(product => product._id !== id)
                    setProducts(remaining);
                })

        }
    }
    return (
        <div>
            <div className='product-list'>
                <div className="d-flex product-list-each justify-content-between">
                <p className='d-flex align-items-center'>{product.name}</p>
                <button className='btn btn-danger' onClick={() => handleDelete(product._id)}>Delete Item</button>
                </div>
            </div>
        </div>
    );
};

export default ProductsList;