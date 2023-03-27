import React from 'react';
import './NavigationBar.css';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineSearch } from 'react-icons/ai';
function NavigationBar(props) {
    return (
        <div style={{background:"linear-gradient(to bottom, #141b29, #0c111b 300px)"}}>
            <nav>
                    <div style={{padding:"25px 3px 20px 63px"}}><GiHamburgerMenu color='rgb(255 255 255 / 60%)' size="20px" /></div>
                    <div style={{position:"relative",top:"-3px"}}>
                        <Link to=''><img src="assets/disney-hotstar-logo-dark.svg" alt="" /></Link>
                    </div>
                    <div style={{position:"relative",left:"-13px"}}>
                        <Link to='tv'>TV</Link>
                        <Link to='movies'>Movies</Link>
                        <Link to='sports'>Sports</Link>
                        <Link to='disneypopular'>Disney+</Link>
                        <Link to='kids'><img src="assets/kids.svg" alt="" /></Link>
                    </div>
                <div className='searchBox' style={{marginLeft:"auto",position:'relative',left:"-35px"}}>
                    <input type="search" placeholder="Search" />
                        <AiOutlineSearch color='rgb(255 255 255 / 60%)' size="18px" style={{position:"relative",left:"-20px",top:"5px"}}/>
            
                    <button className='subscribeBtn'>SUBSCRIBE</button>
                    <Link to='login' style={{fontSize:"13px",fontWeight:"550"}} >LOGIN</Link>
                </div>
            </nav>
        </div>
    );
}

export default NavigationBar;