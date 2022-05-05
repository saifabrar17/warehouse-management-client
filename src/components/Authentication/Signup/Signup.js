import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import google from '../../../images/google.png';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {
    const navigate = useNavigate();
    
    
    const [signInWithGoogle, user, error] = useSignInWithGoogle(auth);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorz, setErrorz] = useState('');

    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }
    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }
    const handleConfirmPasswordBlur = event => {
        setConfirmPassword(event.target.value);
    }
    const handleOnSubmit = event =>{
        event.preventDefault();
        if(password !== confirmPassword){
            setErrorz('Password did not match!')
            return;
        }
        createUserWithEmailAndPassword(auth, email, password)
        .then(result =>{
            const user = result.user;
            setEmail('');
            setPassword('');
            verifyEmail();
        })
        .catch(error =>{
            console.error(error);
        })
       
    }

    if(user){
        navigate('/')
    }

    const verifyEmail = () =>{
        sendEmailVerification(auth.currentUser)
        .then(()=>{
            toast('Email verification sent');
            
        })
    }


    return (
        <div>
            <div className='login-div'>
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center pt-5">
                        <h2>Sign Up</h2>
                    </div>
                </div>
                <div className="d-flex justify-content-center">
                    <Form className='sign-up-form w-50' onSubmit={handleOnSubmit}>
                        {/* Email */}
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control onBlur={handleEmailBlur} type="email" placeholder="Enter email" required/>
                        </Form.Group>
                        {/* PASSWORD */}
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control onBlur={handlePasswordBlur} name="password1" type="password" placeholder="Password" required/>
                        </Form.Group>
                        {/* CONFIRM PASSWORD */}
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control onBlur={handleConfirmPasswordBlur} name="password2" type="password" placeholder="Password" required/>
                        </Form.Group>
                        <p>{errorz}</p>
                        <p>{error}</p>
                        <Button className='w-25' variant="secondary" type="submit">
                            Sign Up
                        </Button>
                        <ToastContainer />
                    </Form>
                </div>

                <div className="or-section py-3 text-center d-flex align-items-center">
                    <div className="or-left"></div>
                    <h5 className='pt-2 px-2'>OR</h5>
                    <div className="or-right"></div>
                </div>
                <div className="google-button d-flex justify-content-center">
                    <Button onClick={()=>signInWithGoogle()} className='w-25' variant="secondary" type="submit">
                        <img src={google} alt='' className="login-form-google-logo pe-3 w-25" />
                        Google
                    </Button>
                </div>
                <div className="to-signup py-4 text-center">
                    <p>Already have an account? <Link to='/login'>Login here...</Link></p>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Signup;