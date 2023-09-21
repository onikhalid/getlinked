'use client'
import React, { useEffect, useState } from 'react';
import styles from './animatedH3.module.scss';
import { useWindowWidth } from '@/utils/hooks/ResponsiveHook';
import { montserrat } from '@/app/layout';




function AnimatedH3() {
    const [animationStarted, setAnimationStarted] = useState(false);
    const width = useWindowWidth();

    useEffect(() => {
        setAnimationStarted(true);
    }, []);


    const length = ()=>{
        if (width < 720) {
            return '150'
        }
        else if (width < 1019) {
            return '160'
        }
        else if (width < 1345) {
            return '200'
        }
        else return '230'
    }
    return (
        <div className={`${styles.headercontainer} ${montserrat.className}`}>
            <h3 className={styles.headertext}>Igniting a Revolution in HR Innovation</h3>
            <svg
                className={`${styles.animatedsvg} ${animationStarted ? `${styles.animate}` : ''}`}
                width={length()}
                height="17"
                viewBox={`0 0 ${length()} 17`}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M1 14.043C43.3333 5.7097 154.4 -5.95697 254 14.043"
                    stroke="#FF26B9"
                    stroke-width="5"
                    stroke-dasharray={length()}
                />
            </svg>
        </div>
    );
}

export default AnimatedH3;
