import React from 'react'
import Button from '../Button'
import styles from './Title.module.scss'

function Title({ navigation, title, button=false, buttonText, ...props }) {
  return (
    <div className={styles.titleLink}>
        <div className='h-[35px]'>{title}</div>
        {button && <Button className={styles.titleButton} outline to={`/${props.category}/${props.type}`} btn_s rounded>{buttonText}</Button>}
    </div>
  )
}

export default Title