import React from 'react';
import './NotFound.css';
const NotFound = () => {
    return (
        <div className='route-404-div d-flex justify-content-center align-items-center'>
            <div className="container">
                <div className="row">
                    <div className="col-12 d-flex justify-content-center align-items-center">
                        <div className='error-div text-center'>
                            <h3>Woops!</h3>
                            <h1>404</h1>
                            <h1>Page not found!</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFound;