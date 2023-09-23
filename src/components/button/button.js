"use client"
import styles from './button.module.scss'
import Link from "next/link"
import { montserrat } from '@/app/layout'

const Button = ({ title, name, link, action }) => {

    return (
        <>
            {
                action ?
                    <button title={title || ''} className={`${montserrat.className} ${styles.button}`} onClick={link}>
                        {name}
                    </button>
                    :
                    <Link title={title || ''} className={`${montserrat.className} ${styles.button}`} href={link}>
                        {name}
                    </Link>

            }
        </>



    )
}

export default Button