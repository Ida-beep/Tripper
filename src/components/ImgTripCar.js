import lottie from 'lottie-web';
import React, {useEffect, useRef } from 'react';

function ImgTripCar() {

    const imgContainer = useRef(null)

    useEffect(() => {
    lottie.loadAnimation({
        container: imgContainer.current,
        renderer: 'svg',
        loop: true, 
        autoplay: true,
        animationData: require('../tripimg.json')
    })

    }, [])

    return(

        <div className="image-car-container" ref={imgContainer}></div>
    )

}

export default ImgTripCar;


