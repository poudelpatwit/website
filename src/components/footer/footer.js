import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import '../../static/css/footer.css';

function FooterElement() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section contact">
                    <h2>Contact </h2>
                    <p>Email: ipandey08@gmail.com</p>
                    <p>Phone: +977-9804446297</p>
                    <p>Address: Gongabu, Kathmandu, Nepal</p>
                </div>
                <div className="footer-section social-media">
                    <h2 className='social-media-header'>Social Media</h2>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faFacebook} className='social-media-icon' />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faTwitter} className='social-media-icon' />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} className='social-media-icon' />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faInstagram} className='social-media-icon' />
                    </a>
                </div>
            </div>
            <div className="footer-bottom">
                <p className='footer-bottom-copyright'>© 2023 Inusha Pandey. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default FooterElement;
