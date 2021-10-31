import React from 'react'
import Tilt from 'react-tilt'
import brain from './brain.png'

import './logo.css';

const Logo = () => {
    return (
        <div>
            <Tilt className="Tilt br3 shadow-5 ma3" options={{ max : 55, speed: 300}} style={{ height: 135, width: 135 }} >
                <div className="Tilt-inner pa3">
                    <img style={{paddingTop: '20px'}} src={brain} alt="oops"/>
                </div>
            </Tilt>
        </div>
    )
}

export default Logo