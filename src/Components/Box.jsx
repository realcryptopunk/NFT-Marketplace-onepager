import React from 'react';

function Box(props) {
    return (
         <div className='s-box'>
            <div className='s-b-img'>
                 <img src={props.image} alt= {props.alte} />
            </div>
            <div className='s-b-text'>
                <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla sit voluptatibus illo qui doloremque quo veritatis neque consequatur debitis? Accusamus expedita totam ea numquam porro tempora laudantium impedit illum corrupti!
                </p>
                <a href ='#' className= 'shp-btn'>{props.button}</a>
            </div>
        </div>
    )
}

export default Box; 
