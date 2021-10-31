import React from "react";

const Image = (props) => {
    return (
        <div className="mt3">
            <img src={props.url} 
            alt="" height= "auto" width="500px" />
        </div>
    )
}

export default Image;