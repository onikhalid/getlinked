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




      {/* <span role="button" tabIndex="0" className={isVisible ? `${styles.topbtn}` : `${styles.topbtn} ${styles.hidden}`} onClick={scrollToTop}></span> */}
    </body>
  )
}

export default Body