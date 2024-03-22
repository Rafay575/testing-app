import React from 'react'
import '../Style/footer.css'

function Footer() {
    return (
        <div className='footer-full'>
            <p className='text' style={{ 'marginTop': '50px' }}>blockspin.bet © |
                <a href=' https://blockspin-protocol.gitbook.io/' className=' doc' style={{ textDecoration: 'none', marginLeft: '3px', marginRight: '3px' }}>
                    documentation
                </a>

                |
                <a href='https://x.com/8lockspin' style={{ marginLeft: '5px' }}><svg width="20" height="20" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g opacity="0.5">
                        <path d="M8.73508 6.35148L14.1991 0H12.9043L8.1599 5.5149L4.37056 0H0L5.73023 8.3395L0 15H1.29487L6.30508 9.17608L10.3069 15H14.6775L8.73477 6.35148H8.73508ZM6.96158 8.41297L6.38099 7.58255L1.76143 0.974755H3.75027L7.47831 6.30746L8.05891 7.13788L12.9049 14.0696H10.9161L6.96158 8.41329V8.41297Z" fill="white" />
                    </g>
                </svg>
                </a>
            </p>
            <p className='text'>2024</p>
        </div>
    )
}

export default Footer