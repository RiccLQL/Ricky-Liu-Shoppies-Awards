import React from 'react';
import '../styles/Button.css'

const Submitted = ({backToHome}) => {
    return (
        <div>
            <h1>Thank you for submitting your choices!</h1>
            <button className="neutral-button" onClick={() => backToHome()}>Back to home</button>
        </div>
    )
}

export default Submitted;