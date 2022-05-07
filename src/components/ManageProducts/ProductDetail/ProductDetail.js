import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
 

const ProductDetail = () => {

    const { productId } = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/product/${productId}`;

        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])
    // console.log(product);
    return (
        <div>
            <h2>Product details</h2>
            <h4>Name: {product.name}</h4>
        </div>
    );
};

export default ProductDetail;