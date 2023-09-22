import styles from  './typewriter.module.scss';
import React, { useState, useEffect } from 'react';



const Typewriter = ({ text }) => {
    const [displayText, setDisplayText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (text && currentIndex < text.length) {
            const typingInterval = setInterval(() => {
                setDisplayText((prevText) => prevText + text[currentIndex]);
                setCurrentIndex((prevIndex) => prevIndex + 1);

                if (currentIndex === text.length - 1) {
                    clearInterval(typingInterval);
                }
            }, 100);

            return () => clearInterval(typingInterval);
        }
    }, [text, currentIndex]);

    return (
        <span className={styles.typewriter}>
            {displayText}
        </span>
    );
};

export default Typewriter;

