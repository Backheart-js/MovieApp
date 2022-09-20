import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import clsx from 'clsx'
import React from 'react'

import styles from './Icon.module.scss'

function Icon({ icon, primary, secondary, outline, white, className, ...passprops }) {
    const classes = clsx(styles.icon, {
        [className]: className,
        primary,
        secondary,
        outline,
        white
    })

    const props = {
        ...passprops,
    }

  return (
    <FontAwesomeIcon icon={icon} className={classes} {...props}/>
  )
}

export default Icon