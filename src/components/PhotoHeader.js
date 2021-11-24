/*Rename?*/
import React from "react";

function PhotoHeader(props) {
    return (
        <div className="photo-header">
            <img className="photo-header-image" src={props.image} alt={props.alt}/>
        </div>
    )
}

export default PhotoHeader;