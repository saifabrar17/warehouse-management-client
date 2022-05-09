import React from 'react';
import Banner from './Banner/Banner';
import BannerProducts from './BannerProducts/BannerProducts';
import LowStock from './LowStock/LowStock';
import MyChart from './Rechart/MyChart';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <BannerProducts></BannerProducts>
            <LowStock></LowStock>
            <MyChart></MyChart>
        </div>
    );
};

export default Home;