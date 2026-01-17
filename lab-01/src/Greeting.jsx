import React from 'react';
function Greeting() {
    const currentDate = new Date();
    const hours = currentDate.getHours();

    let greetingText = '';
    let textColor = '';


    if (hours < 12 && hours >= 6) {
        greetingText = 'Good Morning';
        textColor = '#FFA500'; 
    }else if (hours >= 12 && hours < 18) {
        greetingText = 'Good Afternoon';
        textColor = '#00BFFF'; 
    }else{
        greetingText = 'Good Evening';
        textColor = '#4B0082'; 
    }

    const style={
        color: textColor,
        fontSize: '30px',
        fontFamily: 'Arial, sans-serif',
        textAlign: 'center',
        margin: '20px 0',
    }

    return(
        <div>
            <h1 style={style}>{greetingText}</h1>
        </div>
    )
}

export default Greeting;