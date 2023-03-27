import React, { useEffect, useRef, useState } from 'react';
import './Carousel.css';
import {FaChevronRight, FaChevronLeft } from 'react-icons/fa'

let delay=2500;

function Carousel(props) {
    let citems=props.shows

    let posters=citems.data.items;
    let totalposters=citems.data.itemids;
    let [post,setPost]=useState(0);

    let prev=()=>{
        if(post>0) setPost(post-1);
        else setPost(totalposters.length-1);
    }
    let next=()=>{
        if(post<totalposters.length-1) setPost(post+1);
        else setPost(0);
    } 
    
    let postersUrl="https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/";

    // const [index, setIndex] = React.useState(0);
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setPost((prevIndex) => 
            prevIndex === totalposters.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [post]);

    return (
        <div>
            <div >
                    {

                        <div style={{padding:"5px",borderRadius:"10px"}}>
                            <section style={{borderRadius:"10px"}}>
                                <div className='highlightArrows' style={{display:"flex"}}>
                                    <button className='arrows' onClick={prev} ><FaChevronLeft size={30}/></button>

                                    <div style={{width:'30%',padding:"50px",background: "#030b17" }}>
                                        <h1>{posters[totalposters[post]].title}</h1>
                                        <p className='cato'>{posters[totalposters[post]].genre[0]} {"• "+posters[totalposters[post]].lang[0]} {posters[totalposters[post]].year?"• "+posters[totalposters[post]].year||posters[totalposters[post]].yearLatestSeason:""} </p>
                                        <p className='des'>{posters[totalposters[post]].description}</p>
                                    </div>
                                    
                                    <div className='gradient'>
                                    </div>
                                    <div >
                                            <img src={postersUrl+posters[totalposters[post]].images.h} width={800}  alt="" style={{borderTopRightRadius:'10px',borderBottomRightRadius:'10px'}} /> 
                                    </div>
                                    <button className='arrows' onClick={next} ><FaChevronRight size={30} /></button>

                                </div>
                            </section>
                        </div>
                }
                
                </div>
        </div>
    );
}

export default Carousel;