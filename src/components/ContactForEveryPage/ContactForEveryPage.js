import React from 'react';
import logo from '../../images/logo/logo1.png';

const ContactForEveryPage = () => {
    return (
        <div>
            <div className='contact2'>
                <img src={logo} alt="Logo" />
                <h2>Sigmacare Services</h2>
                <div className='info'>
                    <p><b>Call</b> : +123456789</p>
                    <p><b>Mail</b> : support@example.com</p>
                    <p><b>Address</b> : 1234 North Avenue Luke Lane, South Bend, IN 360001</p>
                </div>
                <div className='contact-nav'>
                    <a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><i className="fab fa-facebook fa-lg"></i></a>
                    <a href="https://www.twitter.com/" target="_blank" rel="noreferrer"><i className="fab fa-twitter fa-lg"></i></a>
                    <a href="https://www.youtube.com/" target="_blank" rel="noreferrer"><i className="fab fa-youtube fa-lg"></i></a>
                    <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin fa-lg"></i></a>
                </div>
            </div>
        </div>
    );
};

export default ContactForEveryPage;