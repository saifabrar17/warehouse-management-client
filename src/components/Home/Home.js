import React from 'react';
import Banner from './Banner/Banner';
import BannerProducts from './BannerProducts/BannerProducts';
import LowStock from './LowStock/LowStock';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <BannerProducts></BannerProducts>
            <LowStock></LowStock>
        </div>
    );
};

export default Home;