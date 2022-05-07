import React from 'react';
import useProducts from '../../Hooks/useProducts';

const ManageAllProducts = () => {
    const [products, setProducts] = useProducts([]);

    const handleDelete = id =>{
        const proceed = window.confirm('Delete?');
        if(proceed){
            const url = `http://localhost:5000/product/${id}`;
            fetch(url,{
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
        <div className='w-50 mx-auto'>
            <h2>Manage Products</h2>
            {
                products.map(product => <div
                key={product._id}
                >
                    <h4>{product.name}<button onClick={() => handleDelete(product._id)}>X</button></h4>
                </div>)
            }
        </div>
    );
};

export default ManageAllProducts;