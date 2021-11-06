import React from "react";

import Child from '../child/Child.js'

const Image = ({url, box}) => { 
    return (
        <div >
            <div className="absolute mt3">
                <img id="inputimage" src={url} 
                alt="" height= "auto" width="500px" />

                {
                    box.map((element, i) => {
                        return (
                            <Child style={{ top: element[0], right: element[1],
                             bottom: element[2], left: element[3] }}/>
                        )
                    })
                }
                
            </div>
        </div>
        
    )
}

export default Image;