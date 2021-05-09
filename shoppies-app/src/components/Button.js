import React from 'react';
import '../styles/Button.css'

const Button = ({caption, color, trigger}) => {

    /* functions */



    /* render */
    if (color === "neutral") {
        return (
            <div>
                <button className="neutral-button" onClick={trigger}>{caption}</button>
            </div>
        )
    } else if (color === "positive") {
        return (
            <div>
                <button className="positive-button">{caption}</button>
            </div>
        )
    } else if (color === "negative") {
        return (
            <div>
                <button className="negative-button">{caption}</button>
            </div>
        )
    } else {
        throw new Error("Button wrongly configured");
    }

}

export default Button;