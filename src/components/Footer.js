import React from 'react'
import { Link } from 'react-router-dom'


const Footer = () => {
    return (
        <footer className="footer-container">
            
            <p>Copyrigth &copy; 2021 Tripper Inc.</p>

            <Link to='/about' ><p  style={{color: '#1ea774', textAlign: 'center'}} >  About</p> </Link>
           
        </footer>
    )
}

export default Footer



