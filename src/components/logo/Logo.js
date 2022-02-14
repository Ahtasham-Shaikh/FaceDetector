import React from 'react';
import Tilt from 'react-tilt';
import ai2 from './ai2.png';

import './logo.css';

const Logo = () => {
    return (
        <div>
            <Tilt className="Tilt br3 shadow-5 ma3" options={{ max : 55, speed: 300}} style={{ height: 110, width: 110 }} >
                <div className="Tilt-inner pa3">
                    <img style={{paddingTop: '8px'}} src={ai2} alt="oops"/>
                </div>
            </Tilt>
        </div>
    )
}

export default Logo