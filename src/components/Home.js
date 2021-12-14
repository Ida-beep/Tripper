import React from 'react';
import { Link } from 'react-router-dom'
import Footer from './Footer.js';
 
function Home () {
    return (
        <>
           <br />
           <br />
           <br />
           <br />
            <h3 style={{color: '#1ea774', textAlign: 'center'}} >Welcome to Tripper!</h3> 
           <br />
           <p style={{color: '#1ea774', textAlign: 'center'}}> Start planning your next Excursion today </p>
           <br />
           <br />
           <br /> 
            <p style={{color: '#1ea774', textAlign: 'center'}} >
                <Link to='/SignUp' > Sign Up Here  </Link>
            </p> 
            <br />
           <br />
           <br />
           <br />
            <Footer />
        </>
    )
}
export default Home;


/**
 *  <footer style={{textAlign: 'center'}}>
                <Footer />

            </footer>
 */