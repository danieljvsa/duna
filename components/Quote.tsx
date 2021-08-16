import React, { useContext } from 'react'
import { DunaContext } from '../contexts/DunaConext'
import styles from '../styles/Home.module.scss'


export function Quote(){
    const {quote} = useContext(DunaContext)

    return(
        <header className={styles.body_header}>
              <div className={styles.img_background}></div>
              <div className={styles.title}>
                  <h2>Quote of day</h2>
                  <p>"{quote}"
                  </p>
              </div>
        </header>
    )
}