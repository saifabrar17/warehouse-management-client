import React, { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { toast, ToastContainer } from 'react-toastify';
import './AddProduct.css';
import axios from 'axios';

const AddProduct = () => {
    const [user] = useAuthState(auth);

    const handleSubmit = event => {
        event.preventDefault();
        const addItem ={
            email: user.email,
            name: event.target.name.value,
            supplier: event.target.supplier.value,
            description: event.target.description.value,
            price: event.target.price.value,
            quantity: event.target.quantity.value,
            img: event.target.img.value
             
        }
        axios.post('https://vast-fjord-97111.herokuapp.com/product', addItem)
        .then(response =>{
            const {data} = response;
            if(data.insertedId){
                toast('Product Added Successfully!');
                event.target.reset();
                console.log(data);
            }
        })
    }



    return (
        <div className='add-new-product-container mx-auto'>
            <h2 className='text-center py-3'>Add New Product</h2>
            <div>
                <form className='d-flex flex-column' onSubmit={handleSubmit}>
                    <input className='mb-2 addPIF' placeholder='Product Name' name='name' />
                    <input className='mb-2 addPIF' placeholder='Supplier' name='supplier' />
                    <input className='mb-2 addPIF' placeholder='Description' name='description' />
                    <input className='mb-2 addPIF' placeholder='Price' type="number" name='price' />
                    <input className='mb-2 addPIF' placeholder='Quanitiy' type="number" name='quantity' />
                    <input className='mb-2 addPIF' placeholder='Photo Url' type="text" name='img' />
                    <input className='mb-2 addPIF' placeholder={user.email} type="text" disabled />
                    <input className='btn btn-primary' type="submit" value="Add Product" />
                </form>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default AddProduct;