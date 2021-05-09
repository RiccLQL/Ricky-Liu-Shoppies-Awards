import React from 'react';
import '../styles/Button.css'

const StartButton = ({goToHome}) => {

    /* functions */



    /* render */

    return (
        <div>
            <button className="positive-button" onClick={() => goToHome()}>
                Start nominating my favorite movies!
            </button>
        </div>
    )

}

export default StartButton;