import React from 'react';
import Carousel from './Carousel';
import popularshows from './Json Files/popularshows_data.json';
import Shows from './Shows';
import starplusShows from './Json Files/starPlusShows.json';
import starbShows from './Json Files/starBharatShows.json';

function Tv(props) {
    return (
        <div>
            <Carousel shows={starplusShows}/>
            <Shows shows={popularshows} heading='Popular in Shows' />
            <Shows shows={starbShows} heading='Starplus Bharath Shows' />
        </div>
    );
}

export default Tv;