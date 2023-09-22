
"use client"
import styles from './nav.module.scss'

import { useContext, useLayoutEffect, useState } from 'react';
import { useWindowWidth } from '@/utils/hooks/ResponsiveHook';
import Link from 'next/link';
import { NavContext } from '@/utils/contexts/contexts';
import Button from '@/components/button/button';
import { montserrat } from '@/app/layout';






const Navigation = () => {
    const width = useWindowWidth()

    const { mobileNavState, setMobileNavState } = useContext(NavContext);



    const pages = [
        {
            path: "#timeline",
            name: "Timeline",
        },
        {
            path: "#overview",
            name: "Overview",
        },
        {
            path: "#faqs",
            name: "FAQs",
        },
        {
            path: "/contact",
            name: "Contact",
        }

    ];

    const getMenuClass = () => {
        if (mobileNavState === null) {
            return `${styles.menulinks}`
        } else if (mobileNavState === 'close') {
            return `${styles.menulinks} ${styles.close}`
        } else if (mobileNavState === 'open') {
            return `${styles.menulinks} ${styles.open}`
        }
    }
    const hamburgerClass = () => {
        if (mobileNavState === 'open') {
            return `${styles.hamburgermenu} ${styles.active}`
        } else {
            return `${styles.hamburgermenu}`
        }
    }





    return (
        <nav className={`${styles.navbar} container`}>

            <Link aria-label="Company Logo" href={'/'} className={styles.logo}>
                <article>get<span>linked</span></article>
            </Link>


            <section className={getMenuClass()}>
                <ul role='menu' className={montserrat.className}>
                    {pages.map((page, index) => {
                        return (
                            <li key={index}>
                                <Link href={page.path} onClick={() => setMobileNavState()}>
                                    {page.name}
                                </Link>
                            </li>
                        )
                    })}
                </ul>

                <Button className={styles.registerbutton} name={'Register'} link={'/register'} />
            </section>

            {
                width < 1020 &&
                <button
                    class={hamburgerClass()}
                    onClick={() => setMobileNavState()}
                >
                    <div class={`${styles.line} ${styles.line1}`}></div>
                    <div class={`${styles.line} ${styles.line2}`}></div>
                    <div class={`${styles.line} ${styles.line3}`}></div>
                </button>
            }



        </nav>
    )
}

export default Navigation