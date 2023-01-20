import React from 'react';
import Navigation from '../components/Navigation';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const Contact = () => {
    return (
        <div className="contact">
            <Navigation />
            <div className="contactContent">
                <div className="header">
                    <div className="contactBox">
                        <h2>Contactez-moi</h2>
                        <ul>
                            <li>
                                <i className="fas fa-map-marker-alt"></i>
                                <span>St Péray</span>
                            </li>
                            <li>
                                <i className="fas fa-mobile-alt"></i>
                                <CopyToClipboard text="0699294512">
                                <span className="clickInput" onClick={()=> {alert("Téléphone Copié !")}}>06 99 29 45 12</span>
                                </CopyToClipboard>
                            </li>
                            <li>
                                <i className="far fa-envelope"></i>
                                <CopyToClipboard text="lartenforme@gmail.com">
                                <span className="clickInput" onClick={()=> {alert("Email Copié !")}}>lartenforme@gmail.com</span>
                                </CopyToClipboard>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="socialNetwork">
                        <ul>
                            <a href="https://www.linkedin.com/in/sandra-gonzalez-developpeuse-web-freelance/" target="_blank" rel="noopener noreferrer">
                                <h4>LinkedIn</h4>
                                <i className="fab fa-linkedin"></i>
                            </a>
                            <a href="https://www.github.com/Sandrea-g/" target="_blank" rel="noopener noreferrer">
                                <h4>GitHub</h4>
                                <i className="fab fa-github"></i>
                            </a>
                            <a href="https://www.instagram.com/sandrea_photographies" target="_blank" rel="noopener noreferrer">
                                <h4>Instagram</h4>
                                <i className="fab fa-instagram"></i>
                            </a>
                        </ul>
                </div>
            </div>
        </div>
    );
};

export default Contact;
