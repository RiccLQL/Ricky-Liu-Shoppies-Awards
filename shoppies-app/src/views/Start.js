import React from 'react';

import StartButton from '../components/StartButton';

const Start = ({goToHome}) => {

    /* functions */



    /* Render */

    return (
        <div className="start">
            <div>
                <h1>The Shoppies: Shopify's Movie Awards</h1>
                <br></br>
            </div>
            <StartButton goToHome={goToHome}/>
            <p>Made by Ricky Liu</p>
        </div>
    );
}

export default Start;