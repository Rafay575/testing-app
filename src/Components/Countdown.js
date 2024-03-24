import React, { useState, useEffect } from 'react';
import { getRemainingTimeUntilMsTimestamp } from './CounterHelper';
import '../Style/counter.css';

const defaultRemainingTime = {
    seconds: '00',
    minutes: '00',
    hours: '00',
    days: '00'
};

// Hardcoded countdown target time (example: New Year 2024)
const countdownTargetTime = new Date('July 23, 2024 00:00:00 GMT+0000').getTime();

const Countdown = () => {
    const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);

    useEffect(() => {
        const intervalId = setInterval(() => {
            updateRemainingTime();
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    const updateRemainingTime = () => {
        setRemainingTime(getRemainingTimeUntilMsTimestamp(countdownTargetTime));
    };

    return (
        <div className="countdown-timer">
            <span>{remainingTime.days}</span><span>d</span>
            <span className="two-numbers">{remainingTime.hours}</span><span>h</span>
            <span className="two-numbers">{remainingTime.minutes}</span><span>min</span>
            <span className="two-numbers">{remainingTime.seconds}</span><span>sec</span>
        </div>
    );
};

export default Countdown;
