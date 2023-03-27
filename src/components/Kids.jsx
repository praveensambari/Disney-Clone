import React from 'react';
import Carousel from './Carousel';
import Shows from './Shows';
import kids from './Json Files/kids.json';
import bkids from './Json Files/kids_data.json';
function Kids(props) {
    return (
        <div>
            <Carousel shows={bkids}/>
            <Shows shows={bkids} heading='Popular in Kids' />
            <Shows shows={kids} heading='Popular in Shows' />
        </div>
    );
}

export default Kids;