import './layout.css'
import React from 'react';

const Footer = () => {
    const thisYear = () => {
        const year = new Date().getFullYear();
        return year
    };
    return (
        <footer className='footer'>
            <p id="main-foot">Copyright &copy; <span>{thisYear()}</span></p>
        </footer>
    )
}

export default Footer