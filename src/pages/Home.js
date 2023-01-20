import React from 'react';
import Navigation from '../components/Navigation';

const Home = () => {
    return (
        <div className="home">
            <Navigation />
            <div className="homeContent">
                <div className="content">
                    <h1>Sandra Gonzalez</h1>
                    <h2>Développeuse Front-End</h2>
                    <div className="btn">
                        <a href="tel:0699294512" target="_blank"  rel="noreferrer">Prenons Contact !</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;