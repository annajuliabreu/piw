import React from 'react';
import GrayImg from '../shared/gray_img';
import DescriptionWithLink from '../shared/description_with_link';

const Planet = (props) => {
    return (
        <div>
            <h4>{props.name}</h4>
            <GrayImg img_url={props.img_url} />
            <DescriptionWithLink text={props.text} link={props.link} /><br />
        </div>
    )
}

export default Planet;