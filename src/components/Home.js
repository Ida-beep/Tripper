import React from 'react';
import { Link } from 'react-router-dom'
import Footer from './Footer.js';
import Image from '../assets/car.png';
 
function Home () {
    return (
        <>
        <div className="welcome-page">
            <div className="welcome-content">
                <h3 style={{color: '#1ea774'}}>Welcome to Tripper!</h3> 
                <p style={{color: '#1ea774'}}>Start planning your next Excursion today </p>
                <div className="button-container">
                    <Link to="/CreateExcursion"><button className="button-primary-medium">I am an Organiser</button></Link>
                    <Link to="/SignUp"><button className="button-primary-medium">I am a Participant</button></Link>
                </div>
            </div>
            {/* <img className="" src={Image} alt="car"/> */}
        </div>
        <Footer />
        </>
    )
}
export default Home;