import React from 'react';
import '../../static/css/sidebar-bottom.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

function SidebarBottom() {
    return (
        <div className="sidebar-bottom">
            <div className="profile-picture-container">
                <img
                    src="/Inusha.jpg"
                    alt="Profile"
                    className="profile-picture"
                />
            </div>
            <div className="text-container">
                <p className='personal-name'>Inusha Pandey</p>
                <p>Software Developer @ F1Soft</p>
            </div>
            <div className="social-media-icons">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faFacebook} className='social-media-icon' />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faTwitter} className='social-media-icon' />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} className='social-media-icon' />
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} className='social-media-icon' />
                </a>
            </div>
            <div className='sidebar-footer'>
                <p className='copy-right'>@ Inusha Pandey 2023</p>
            </div>
        </div>
    );
}

export default SidebarBottom;
