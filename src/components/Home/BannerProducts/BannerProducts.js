import React, { useState } from 'react';
import useProducts from '../../Hooks/useProducts';
import Product from '../../ManageProducts/Product/Product';

const BannerProducts = () => {

    const [products] = useProducts([]);


    return (
        <div className='container'>
            <h2 className='text-center py-4'>OUR PRODUCTS</h2>
            <div className='products-mapped'>
                {
                    products.slice(0,3).map(product => <Product
                    key={product.id}
                    product={product}
                    ></Product>)
                }
            </div>
        </div>
    );
};

export default BannerProducts;