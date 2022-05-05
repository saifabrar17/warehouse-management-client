import React from 'react';

const Footer = () => {
    return (
        <div className='text-center mt-5 py-2 text-white bg-dark'>
            <p className='p-0 m-0'>Copyright &#169; {(new Date().getFullYear())} Inventory Management System. All rights reserved.</p>
        </div>
    );
};

export default Footer;