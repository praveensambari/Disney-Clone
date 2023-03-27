import React from 'react';
import './Home.css';
import Carousel from './Carousel';
// import PopularShows from './PopularShows';
import Shows from './Shows';

import citems from './Json Files/Carouselitems.json';
import popularshows from './Json Files/popularshows_data.json';
import popularmovies from './Json Files/popularMovies.json';
import populartriller from './Json Files/triller.json';
import actionshows from './Json Files/action.json';
import romanceshows from './Json Files/romance.json';
import myth from './Json Files/mythology.json';
import crime from './Json Files/crime.json';
import family from './Json Files/family.json';
import reality from './Json Files/reality.json';
import comedy from './Json Files/comedy.json';
import documentary from './Json Files/documentary.json';
import biopic from './Json Files/biopic.json';
import teen from './Json Files/teen.json';
import travel from './Json Files/travel.json';
import science from './Json Files/science.json';
import talkshow from './Json Files/talkshow.json';
// import kids from './Json Files/kids.json';
import bkids from './Json Files/kids_data.json';


function Home(props) {
    return (
        <div >
            <Carousel shows={citems}/>
            {/* <PopularShows shows={popularshows} /> */}
            <Shows shows={popularshows} heading='Poular in Shows'/>
            <Shows shows={myth} heading='Popular in Mythology'/>
            {/* <Shows shows={bkids} heading='Best of Kids'/> */}
            <Shows shows={bkids} heading='Popular in Kids'/>
            <Shows shows={popularmovies} heading='Popular Movies'/>
            <Shows shows={populartriller} heading='Popular in Triller'/>
            <Shows shows={actionshows} heading='Action Movies'/>
            <Shows shows={romanceshows} heading='Romance Movies'/>
            <Shows shows={crime} heading='Popular in Crime'/>
            <Shows shows={family} heading='Popular in Family'/>
            <Shows shows={reality} heading='Popular in Reality'/>
            <Shows shows={comedy} heading='Popular in Comedy'/>
            <Shows shows={documentary} heading='Popular in Documentary'/>
            <Shows shows={biopic} heading='Popular in Biopic'/>
            <Shows shows={teen} heading='Popular in Teen'/>
            <Shows shows={travel} heading='Popular in Travel'/>
            <Shows shows={science} heading='Popular in Science'/>
            <Shows shows={talkshow} heading='Popular in Talkshow'/>
            
        </div>
    );
}

export default Home;