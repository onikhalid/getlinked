"use client"
import styles from './button.module.scss'
import Link from "next/link"
import { montserrat } from '@/app/layout'

const Button = ({ title, name, link }) => {

    return (
        <Link title={title || ''} className={`${montserrat.className} ${styles.button}`} href={link}>
            {name}
        </Link>


    )
}

export default Button