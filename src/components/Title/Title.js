import React from 'react'
import styles from './Title.module.scss'

function Title({ navigation, title }) {
  return (
    <a href={`/${navigation}`} className={styles.titleLink}>
        <div>{title}</div>
    </a>
  )
}

export default Title