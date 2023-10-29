import React from 'react'
import '../../static/css/header.css'

function Header() {
    return (
        <div className="header">
            <h1> Inusha Pandey </h1>
            <div className="header-container">
                <div className="header-menu">
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#portfolio">Portfolio</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header