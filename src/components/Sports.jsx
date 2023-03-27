import React from 'react';
import Carousel from './Carousel';
import citems from './Json Files/sport1.json';
// import Shows from './Shows';

function Sports(props) {
    return (
        <div>
            
            <Carousel shows={citems}/>
            {/* <Shows shows={citems} heading='Sports' /> */}
        </div>
    );
}

export default Sports;