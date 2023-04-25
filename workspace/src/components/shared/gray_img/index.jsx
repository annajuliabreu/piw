import React from 'react';
import  './style.css';

const GrayImg = (props) => {
    // pego a props e ingeto ela
    return (
       <img className={props.gray ? 'gray-img' : 'color-img'} src={props.img_url} alt="Planeta"></img>
    )
}

export default GrayImg;