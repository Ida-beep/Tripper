


//npm install lottie-web --save https://airbnb.io/lottie/#/web 
import lottie from 'lottie-web'; 
import React, {useEffect, useRef } from 'react';  

function ImgLogo() {

    const container = useRef(null) //reference the element with useref

    //first argument a function, second argument an empty array
    useEffect(() => {
    lottie.loadAnimation({
        container: container.current, // the dom element, where the loaing element will be stored in (reference this through useRef)
        renderer: 'svg',
        loop: true, 
        autoplay: true,
        animationData: require('../shape-yellow.json') // the animation data, downloaded as .json file from https://lottiefiles.com/71504-shape-morphing-yellow
    })

    }, [])


    return(

        <div className="image-logo-container" ref={container}></div>
    )


}

export default ImgLogo;