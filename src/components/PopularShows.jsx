import React, { useRef} from 'react';
import './Shows.css';
import {FaChevronRight, FaChevronLeft, FaPlay, FaPlus } from 'react-icons/fa'

function PopularShows(props) {

    let popularShows=props.shows

    let shows=popularShows.data.items;
    let totalshows=popularShows.data.itemids;

    let baseUrl="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/"; //mobile posters

    let scrl = useRef(null);
    //Slide click
    const slide = (shift) => {
        scrl.current.scrollLeft += shift;
    };

    return (
        <div>
            <div style={{marginLeft:"40px",textAlign:"center"}}>
            <p style={{fontWeight:"bold",fontSize:"20px",marginLeft:"-15px",textAlign:"left"}}>Popular Shows</p>
            
            <div className='showsContainer'>
           
                <div className='showsScroll'  ref={scrl} >
                {totalshows && totalshows.map(show =>
                    <div style={{padding:"5px", display: "inline-block"}} key={show}>
                        <section className='show'>
                            <img className='smallPoster' src={baseUrl+shows[show].imageSetV2[1].publicUri} width={140} alt="" />
                            {/* <p>{shows[show].title}</p> */}
                            <div className='insideDetails'>
                                <p className='insideTitle'>{shows[show].title}</p>
                                <p className='insideTag'>{shows[show].genre.join(", ")}</p>
                                <p className='insideDes'>{shows[show].description}</p>
                                <div style={{paddingTop:'5px',paddingBottom:'2px'}}>
                                    <button className='insidebtn'>
                                        <FaPlay  size={8} />
                                        &nbsp;&nbsp;
                                        Watch now
                                    </button>
                                    <button className='insidebtn'>
                                        <FaPlus size={8} style={{fontWeight:'bold'}} />
                                        &nbsp;&nbsp;
                                        Add to Watchlist
                                    </button>
                                </div>
                               
                            </div>
                        </section>
                    </div>
                )}
                
                </div>
            <button className='showArrowLeft' style={{left:"20px",textAlign:"left"}}
                 onClick={() => slide(-100)}
            >
                <FaChevronLeft size={20} />
            </button>
            <button className='showArrowRight'
                onClick={() => slide(+100)}
                style={{right:"0px",textAlign:"right"}}>
                <FaChevronRight size={20}/>
            </button>
            </div>
            </div>
        </div>
    );
}

export default PopularShows;