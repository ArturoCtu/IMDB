import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Typography } from 'antd';

export const MovieCard = () => {
    const { Title, Text } = Typography;
    return (
        <div className='movie-card'>
            <img src='https://images-na.ssl-images-amazon.com/images/I/91Lpv1aIkmL._AC_SL1500_.jpg' aria-label=''/>
            <div className='container'>
                <Title level={4}>Movie Title</Title>
                <Text>Movie Description</Text>
            </div>
        </div>
    );

};