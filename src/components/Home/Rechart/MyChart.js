import React from 'react';
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import useProducts from '../../Hooks/useProducts';

const MyChart = () => {

    const [products] = useProducts();

    const data = products;

    return (
        <div className="container w-100">
            <h2 className='text-center pt-5 pb-3'>Stock Overview</h2>

            <div className="d-flex justify-content-center">
                <ResponsiveContainer width="99%" height={400}>
                    <AreaChart
                        width={500}
                        height={400}
                        data={data}
                        margin={{
                            top: 100,
                            right: 30,
                            left: 0,
                            bottom: 0,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis dataKey="quantity"/>
                        <Tooltip />
                        <Area type="monotone" dataKey="quantity" stroke="#8884d8" fill="#8884d8" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>

    );
};

export default MyChart;