import {useState, useEffect} from 'react';

import {getRemainingTimeUntilMsTimestamp} from './CounterHelper';
import '../Style/counter.css'
const defaultRemainingTime = {
    seconds: '00',
    minutes: '00',
    hours: '00',
    days: '00'
}

const CountdownTimer = ({countdownTimestampMs}) => {
    const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);

    useEffect(() => {
        const intervalId = setInterval(() => {
            updateRemainingTime(countdownTimestampMs);
        }, 1000);
        return () => clearInterval(intervalId);
    },[countdownTimestampMs]);

    function updateRemainingTime(countdown) {
        setRemainingTime(getRemainingTimeUntilMsTimestamp(countdown));
    }

    return(
        <div className="countdown-timer">
            <span>{remainingTime.days}</span>
            <span>d</span>
            <span className="two-numbers">{remainingTime.hours}</span>
            <span>h</span>
            <span className="two-numbers">{remainingTime.minutes}</span>
            <span>min</span>
            <span className="two-numbers">{remainingTime.seconds}</span>
            <span>sec</span>
        </div>
    );
}

export default CountdownTimer;