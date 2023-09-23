"use client"
import { Suspense } from "react"
import styles from "./body.module.scss"
import Navigation from "../Navigation/nav"




const Body = ({ children }) => {

  return (
    <body data-theme={'theme'} className={styles.body}>

      <>
        <Navigation />
      </>

      <Suspense fallback={<p>Loading...</p>}>
        {children}
      </Suspense>
    </body>
  )
}

export default Body