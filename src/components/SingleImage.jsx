import React, { Component } from 'react';

const SingleImage = (props) =>  { 
    console.log(props.itemID);
    return(
        <div data-item-id={props.itemID}>
            <img src={props.src} alt={props.src}></img>
            <p>posted by {props.userName}</p>
            <p>{props.description}</p>
        </div>
    )
}


export default SingleImage 
