import React, { Component } from 'react';

const SingleImage = (props) =>  { 
    return(
        <div>
            <img src={props.src} alt={props.src}></img>
            <p>posted by {props.userName}</p>
            <p>{props.description}</p>
        </div>
    )
}


export default SingleImage 
