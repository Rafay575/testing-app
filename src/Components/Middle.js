import React from 'react'
import CountdownTimer from './Countdown'
import '../Style/Middle.css'
import dayjs from 'dayjs';


function Middle() {
    const currentTimestamp = dayjs().valueOf();
    // Add 120 days to the current timestamp
    const futureTimestamp = dayjs(currentTimestamp).add(120, 'day').valueOf();
    return (
        <div className="middlemain">
            <div className='timerbox'>
                <CountdownTimer countdownTimestampMs={futureTimestamp} />
            </div>
            <p style={{ 'color': 'rgba(255, 255, 255, 1)', 'fontSize': '25px', "fontWeight": '400', 'opacity': '0.5', 'marginTop': '10px' }}>take your seat at the table for early access</p>
            <a href=' https://t.me/blockspinbet' style={{ marginTop: '12px' }}>
                <svg width="40" height="37" viewBox="0 0 27 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M25.4438 0.000591785C25.3613 -0.000551193 25.2795 0.0155684 25.2036 0.0479154L0.35866 10.6957C0.251065 10.7418 0.159559 10.8188 0.0957226 10.9169C0.0318862 11.015 -0.00141082 11.1298 4.58286e-05 11.2469C0.00150247 11.3639 0.0376472 11.4779 0.103905 11.5744C0.170164 11.6709 0.263557 11.7455 0.372266 11.7889L6.03277 14.0534L8.31199 20.8922C8.34393 20.9879 8.39978 21.0737 8.47425 21.1417C8.54872 21.2097 8.63933 21.2575 8.73748 21.2806C8.83563 21.3038 8.93806 21.3014 9.03504 21.2738C9.13202 21.2462 9.22033 21.1943 9.29159 21.1229L13.1603 17.2548L20.315 23.5157C20.3927 23.5837 20.4868 23.6301 20.588 23.6505C20.6891 23.6708 20.7939 23.6644 20.8918 23.6317C20.9897 23.5991 21.0773 23.5414 21.146 23.4644C21.2147 23.3874 21.2621 23.2937 21.2834 23.1927L26.0158 0.713404C26.0338 0.62783 26.0326 0.539324 26.0123 0.454259C25.992 0.369194 25.9531 0.289685 25.8984 0.221458C25.8437 0.15323 25.7746 0.0979814 25.6959 0.0596879C25.6173 0.0213945 25.5312 0.00100901 25.4438 0V0.000591785ZM24.6233 1.58475L20.3334 21.9611L12.1286 14.7815L18.1447 9.31152C18.2607 9.20606 18.3301 9.05884 18.3377 8.90222C18.3452 8.74559 18.2903 8.59238 18.1849 8.47626C18.0794 8.36022 17.9322 8.2908 17.7756 8.28326C17.619 8.27571 17.4658 8.33067 17.3496 8.43603L10.8426 14.3515C10.7809 14.4075 10.7318 14.476 10.6984 14.5523C10.665 14.6286 10.6481 14.7112 10.6489 14.7945C10.6496 14.8778 10.6679 14.9601 10.7026 15.0358C10.7373 15.1116 10.7877 15.1791 10.8503 15.2341L12.2683 16.474L9.13247 19.6091L7.06916 13.4192C7.04177 13.3377 6.99694 13.2631 6.93779 13.2007C6.87863 13.1383 6.80658 13.0895 6.72665 13.0578L2.13803 11.2216L24.6233 1.58475Z" fill="white" />
                </svg>

            </a>


        </div>
    )
}

export default Middle