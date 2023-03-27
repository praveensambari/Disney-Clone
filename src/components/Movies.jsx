import React from 'react';
import Carousel from './Carousel';
import popularmovies from './Json Files/popularMovies.json';
import actionshows from './Json Files/action.json';
import romanceshows from './Json Files/romance.json';
import biopic from './Json Files/biopic.json';
import Shows from './Shows';

function Movies(props) {
    return (
        <div>
            <Carousel shows={popularmovies} />
            <Shows shows={actionshows} heading='Action Movies'/>
            <Shows shows={romanceshows} heading='Romantic Movies'/>
            <Shows shows={biopic} heading='Biopic Movies'/>
        </div>
    );
}

export default Movies;