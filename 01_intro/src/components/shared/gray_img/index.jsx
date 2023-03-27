import React from 'react';
import  './style.css';

const GrayImg = (props) => {
    // pego a props e ingeto ela
    return (
       <img class="gray-img" src={props.img_url} alt="Planeta"></img>
    )
}

export default GrayImg;