import React, { useState } from 'react';
import styles from './dropdown.module.scss';
import { montserrat } from '@/app/layout';

function Dropdown({ details, summary }) {



    return (
        <details className={`${styles.customdropdown} ${montserrat.className}`}>
            <summary>{summary} <span className={styles.controller}></span></summary>
            <div>{details}</div>
        </details>
    );
}

export default Dropdown