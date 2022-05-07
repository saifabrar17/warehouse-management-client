import React, { useEffect } from 'react';
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from 'react-toastify';
import './AddProduct.css';

const AddProduct = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        // console.log(data);
        const url = `http://localhost:5000/product`
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result =>{
            // console.log(result);
            
            toast('Product Added Successfully');
        })
        
    }
    
      
    return (
        <div className='w-50 add-new-product-container mx-auto'>
            <h2 className='text-center py-3'>Add New Product</h2>
            <div>
                <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                    <input className='mb-2 addPIF' placeholder='Product Name' {...register("name")} />
                    <input className='mb-2 addPIF' placeholder='Description' {...register("description")} />
                    <input className='mb-2 addPIF' placeholder='Price' type="number" {...register("price")} />
                    <input className='mb-2 addPIF' placeholder='Quanitiy' type="number" {...register("quantity")} />
                    <input className='mb-2 addPIF' placeholder='Photo Url' type="text" {...register("img")} />
                    <input className='btn btn-primary' type="submit" value="Add Product" />
                </form>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default AddProduct;