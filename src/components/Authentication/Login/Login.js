import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import google from '../../../images/google.png';
import './Login.css';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';

const Login = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();

    if (error) {
        return (
            <div>
                <p>Error: {error.message}</p>
            </div>
        );
    }
    if(user){
        navigate('/')
    }


    return (
        <div>
            <div className='login-div'>
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center pt-5">
                            <h2>Login</h2>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center">
                        <Form className='login-form w-50'>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                                {/* <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text> */}
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Button className='w-25' variant="secondary" type="submit">

                                Login
                            </Button>
                            <Button variant='link'>Forget Password?</Button>
                            {/* <ToastContainer /> */}
                        </Form>
                    </div>

                    <div className="or-section py-3 text-center d-flex align-items-center">
                        <div className="or-left"></div>
                        <h5 className='pt-2 px-2'>OR</h5>
                        <div className="or-right"></div>
                    </div>
                    <div onClick={() => signInWithGoogle()} className="google-button d-flex justify-content-center">
                        <Button className='w-25' variant="secondary" type="submit">
                            <img src={google} alt='' className="login-form-google-logo pe-3 w-25" />
                            Google
                        </Button>
                    </div>
                    <div className="to-signup py-4 text-center">
                        <p>Don't have an account? <Link to='/signup'>Signup here...</Link></p>
                    </div>
                    <div className="to-signup pb-4 text-center">

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;