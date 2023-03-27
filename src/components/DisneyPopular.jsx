import React from 'react';
import Carousel from './Carousel';
import popularshows from './Json Files/popularshows_data.json';
import Shows from './Shows';
import starplusShows from './Json Files/starPlusShows.json';
import starbShows from './Json Files/starBharatShows.json';

function DisneyPopular(props) {
    return (
        <div>
            
            <Carousel shows={starbShows}/>
            <Shows shows={starplusShows} heading='Starplus Bharath Shows' />
            <Shows shows={popularshows} heading='Popular in Shows' />
        </div>
    );
}

export default DisneyPopular;