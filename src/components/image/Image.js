import React from "react";
import './image.css'

const Image = ({url, box}) => {
    return (
        <div >
            <div className="absolute mt3">
                
                <img id="inputimage" src={url} 
                alt="" height= "auto" width="500px" />

                <div className='bounding-box'
                    style={{top: box.topRow, left: box.leftCol, 
                    right: box.rightCol, bottom: box.bottomRow}}>
                </div>

            </div>
        </div>
        
    )
}

export default Image;