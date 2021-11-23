import React from 'react';
import Image from '../assets/norwegian_fjord.png';

function ImageCard() {
    return (
        <div className="card">
            <img className="ImageCard" src={Image} alt="landscape"/>
        </div>
    )
}

export default ImageCard;