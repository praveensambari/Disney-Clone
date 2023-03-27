import React from 'react';
import {connect} from 'react-redux';
import {FaPlay} from 'react-icons/fa'
import {MdOutlineArrowBack} from 'react-icons/md'
import { Link } from 'react-router-dom';

function ShowDetails(props) {
    let details=props.oneshow;
    let postersUrl="https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/";
    // let baseUrl="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/"; //mobile posters

    return (
        <div>
            {console.log(details)}
            <div style={{display:"flex",padding:'2%'}}>
                <div style={{width:'40%',padding:"10px 50px 40px 40px",background: "#030b17" }}>
                    <Link to='/'><MdOutlineArrowBack size={30} style={{color:'white',marginLeft:'-7px'}} /></Link>
                    <h1>{details.title}</h1>
                    <p className='cato'>{details.genre.join(', ')}</p>
                    <p style={{paddingTop:'8px'}}>{details.year?details.year||details.yearLatestSeason:""}</p>
                    <p className='des'>{details.description}</p>
                    <p className='cato' style={{paddingTop:'8px'}}> {details.lang.join(', ')}</p>
                    <p style={{paddingTop:'30px',display:'flex',alignItems:'center',gap:'10px'}} >
                        <FaPlay size={40} />
                        Rated : {details.parentalRatingName}
                    </p>
                </div>
                <div >
                        <img src={postersUrl+details.images.h} width={750}  alt="" style={{borderTopRightRadius:'10px',borderBottomRightRadius:'10px'}} /> 
                </div>
            </div>
            {/* <div>
                {
                    details.imageSetV2 && details.imageSetV2.map(imgUrl=> 
                        <div style={{display:'inline-block',padding:'5px'}} >
                            {console.log(imgUrl)}
                            <img src={postersUrl+imgUrl.publicUri} alt="img" width={200} />
                        </div>
                    )
                }
            </div> */}
        </div>
    );
}

let mapStateToProps=(state)=>{
    return {oneshow:state.oneshow}
}

export default connect(mapStateToProps)(ShowDetails);
// export default ShowDetails;