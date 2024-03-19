import React from 'react'
import Logo from './Logo'
import '../Style/Top.css'

function Top() {
    return (
        <div className='Full'>
            <div className='topmain'>
                <div>
                   <img src={ process.env.PUBLIC_URL + "images/bsb_logo.png"} width={280}/>     
                </div>
                
            </div>
            <p style={{ 'color': 'rgba(255, 255, 255, 1)', 'fontSize': '25px', "fontWeight": '400','opacity':'0.5' }}>the win-win roulette platform</p>
        </div>
    )
}

export default Top