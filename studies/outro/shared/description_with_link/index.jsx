import React, { Fragment } from "react";

const DescriptionWithLink = (props) => {
    // if(!props.description)
    //     return null;

    if(props.link){
        return (
            <Fragment>
                <p>{props.text}</p>
                <a href={props.link}>Learn more here</a>
            </Fragment>
        )
    } else {
        return (
            <Fragment>
                <p><u>{props.text}</u></p>
            </Fragment>
        )
    }
}

export default DescriptionWithLink;