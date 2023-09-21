'use client'
import styles from './countdown.module.scss'
import { useState, useEffect } from 'react';
import { unica, montserrat } from '@/app/layout';

function CountdownTimer({ targetDate }) {
    const calculateTimeRemaining = () => {
        const now = new Date();
        const differenceInSeconds = Math.floor((targetDate - now) / 1000);

        if (differenceInSeconds <= 0) {
            // Handle when the target date has passed
            return {
                days: '00',
                hours: '00',
                minutes: '00',
                seconds: '00',
            };
        }

        const days = String(Math.floor(differenceInSeconds / 86400)).padStart(2, '0');
        const hours = String(Math.floor((differenceInSeconds % 86400) / 3600)).padStart(2, '0');
        const minutes = String(Math.floor((differenceInSeconds % 3600) / 60)).padStart(2, '0');
        const seconds = String(differenceInSeconds % 60).padStart(2, '0');

        return {
            days,
            hours,
            minutes,
            seconds,
        };
    };

    const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeRemaining(calculateTimeRemaining());
        }, 1000);

        return () => clearInterval(timer);
    }, [targetDate]);

    return (
        <div className={`${unica.className} ${styles.countdowntimer}`}>
            {parseInt(timeRemaining.days) > 0 && (
                <h6>{timeRemaining.days} <span className={montserrat.className}>D</span></h6>
            )}
            <h6>{timeRemaining.hours} <span className={montserrat.className}>H</span></h6>
            <h6>{timeRemaining.minutes} <span className={montserrat.className}>M</span></h6>
            <h6>{timeRemaining.seconds} <span className={montserrat.className}>S</span></h6>
        </div>
    );
}

export default CountdownTimer;
