import './Timer.css';
import React, { useEffect } from 'react';

export function Timer({ words, setInputEnabled, time, setTime }) {

    /*  Start the countdown timer upon entering the first word. Once it reaches zero,
        disable the input field */

    useEffect(() => {
        if (time > 0 && words.length > 0) {
            setTimeout(() => {
                setTime(time - 1000);
            }, 1000);
        }
        else if (time === 0) {
            setInputEnabled(false);
        }   
    }, [time, setTime, setInputEnabled, words]);

    // Formatting the countdown output

    const formatTime = () => {
        const totalSeconds = Math.floor(time / 1000);
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;

        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    }

    return (
        <div className="timer-output">{formatTime()}</div>
    );
}