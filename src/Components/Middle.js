import React from 'react'
import CountdownTimer from './Countdown'
import '../Style/Middle.css'


function Middle() {
    return (
        <div className="middlemain">
            <div className='timerbox'>
                <CountdownTimer countdownTimestampMs={1735686000000} />
            </div>
            <p style={{ 'color': 'rgba(255, 255, 255, 1)', 'fontSize': '25px', "fontWeight": '400', 'opacity': '0.5', 'marginTop': '10px' }}>take your seat at the table for early access</p>

            <img src={process.env.PUBLIC_URL + "images/telegram.png"} width={60} />
            

        </div>
    )
}

export default Middle