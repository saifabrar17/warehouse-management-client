import React from 'react';
import './Banner.css';


const Banner = () => {
    return (
        <div className="banner "> 
            <div className="container">
                <div className="row ">
                    <div className="col-md-6 custom-adjust d-flex justify-content-center align-items-center">
                        <div className="banner-header">
                            <h3>Manage All Your PC Items</h3>
                            <h2>In One Place</h2>
                            <p>Managing a Inventory is not an easy task.
                                In this web-app you can manage your your Inventory/Warehouse at one place.</p>
                        </div>
                    </div>
                    <div className="col-md-6"></div>
                </div>
            </div>
        </div>
    );
};

export default Banner;