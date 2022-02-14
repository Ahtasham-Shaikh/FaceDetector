import React from 'react'

const Rank = (props) => {
    return (
        <div>
            <div className="f3">
                {`${props.name}, your number of entries is...`}
            </div>
            <div className="f1">
                {props.entries}
            </div>
        </div>
    )
}

export default Rank