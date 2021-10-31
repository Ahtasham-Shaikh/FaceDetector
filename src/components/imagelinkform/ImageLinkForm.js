import React from 'react';

import './imagelinkform.css'

const ImageLinkForm = ({onInputChange, onSubmit}) => {
    return (
        <div>
            <p className='f3'>
                {"This mystical brain will detect faces in your pictures. Give it a try!"}
            </p>
            <div>
                <div className="pa4 br5 shadow-5">
                    <input onChange={onInputChange} 
                    type="text" className="f4 pa2 w-40 center" 
                    placeholder="Enter Image Url"/>

                    <button onClick={onSubmit} className="w-20 grow f4 link ph3 pv2 dib white">
                        Detect
                    </button>
                </div>
            </div>
        </div>
    )
}
export default ImageLinkForm