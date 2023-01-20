import React from 'react';

const Hobbies = () => {
    return (
        <div className="hobbies">
            <h3>Intérets</h3>
            <ul>
                <li className="hobby">
                    <i className="fa-solid fa-heart"></i>
                    <span>Fitness</span>
                </li>
                <li className="hobby">
                    <i className="fa-solid fa-camera"></i>
                    <span>Photographie</span>
                </li>
                <li className="hobby">
                    <i className="fa-solid fa-earth-america"></i>
                    <span>Voyage</span>
                </li>
            </ul>
        </div>
    );
};

export default Hobbies;