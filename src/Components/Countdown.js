import React, { useState, useEffect } from 'react';
import { getRemainingTimeUntilMsTimestamp } from './CounterHelper';
import '../Style/counter.css';

const defaultRemainingTime = {
    seconds: '00',
    minutes: '00',
    hours: '00',
    days: '00'
};

const CountdownTimer = () => {
    // Initially, try to load the countdown target time from localStorage
    const storedTimestamp = localStorage.getItem('countdownTarget');
    const initialTimestamp = storedTimestamp ? parseInt(storedTimestamp, 10) : Date.now() + 5000; // Default to a 5-second countdown if none is stored

    const [countdownTimestampMs, setCountdownTimestampMs] = useState(initialTimestamp);
    const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);

    useEffect(() => {
        // Update remaining time every second
        const intervalId = setInterval(() => {
            const currentTime = Date.now();
            if (countdownTimestampMs > currentTime) {
                // Only update if the countdown hasn't finished
                setRemainingTime(getRemainingTimeUntilMsTimestamp(countdownTimestampMs));
            } else {
                clearInterval(intervalId); // Stop the interval once the countdown is over
            }
        }, 1000);

        // Cleanup interval on component unmount
        return () => clearInterval(intervalId);
    }, [countdownTimestampMs]);

    // Update the countdown target in both state and localStorage only if necessary
    const updateCountdownTimestamp = (newTimestamp) => {
        localStorage.setItem('countdownTarget', newTimestamp.toString());
        setCountdownTimestampMs(newTimestamp);
    };

    // Optionally, allow for the countdown to be reset/adjusted from within the component
    // For example, upon user action (not shown here)

    return (
        <div className="countdown-timer">
            <span>{remainingTime.days}</span><span>d</span>
            <span className="two-numbers">{remainingTime.hours}</span><span>h</span>
            <span className="two-numbers">{remainingTime.minutes}</span><span>min</span>
            <span className="two-numbers">{remainingTime.seconds}</span><span>sec</span>
        </div>
    );
};

export default CountdownTimer;
