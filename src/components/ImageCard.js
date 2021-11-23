import React from 'react';
import Image from '../assets/landscape.png';

function ImageCard() {
    return (
        <div className="Card">
            <img className="ImageCard" src={Image} alt="landscape"/>
        </div>
    )
}

export default ImageCard;