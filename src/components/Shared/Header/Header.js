import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Header.css';

const Header = () => {

    const [user] = useAuthState(auth);

    return (
        <div className='navigation-bar'>
            <>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand as={Link} to='/'>Inventory</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="ms-auto">
                                {
                                    user?.uid ?
                                    <Nav.Link as={Link} to='/manage_products'>Manage</Nav.Link> :
                                    ''
                                }
                                {
                                    user?.uid ?
                                    <Nav.Link as={Link} to='/add_new_product'>Add</Nav.Link> :
                                    ''
                                }
                                {
                                    user?.uid ?
                                    <Nav.Link as={Link} to='/products'>My Items</Nav.Link> :
                                    ''
                                }
                                <Nav.Link as={Link} to='/blogs'>Blogs</Nav.Link>
                                {
                                    user?.uid ?
                                        <button className='btn btn-link custom-signout-btn' onClick={() => signOut(auth)}>Sign Out</button> :
                                        <Nav.Link as={Link} to='/login'>Login</Nav.Link>

                                }

                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

            </>
        </div>
    );
};

export default Header;