//npm install lottie-web --save https://airbnb.io/lottie/#/web
import lottie from "lottie-web";
import React, { useEffect, useRef } from "react";

/**
 * Returns the official logo of Tripper
 * */
function ImgLogo() {
  //reference the element with useref
  const container = useRef(null); 

  //first argument a function, second argument an empty array
  useEffect(() => {
    lottie.loadAnimation({
      /**
       * the dom element, where the loaing element 
       * will be stored in (reference this through useRef)*/
      container: container.current, 
      renderer: "svg",
      loop: true,
      autoplay: true,
      /**the animation data, downloaded as .json file 
       * from https://lottiefiles.com/71504-shape-morphing-yellow*/
      animationData: require("../../shape-yellow.json"), 
    });
  }, []);

  return <div className="image-logo-container" ref={container}></div>;
}

export default ImgLogo;
