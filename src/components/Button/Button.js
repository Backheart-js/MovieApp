import clsx from 'clsx';
import React from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'

import styles from './Button.module.scss';

function Button({ 
    to, 
    href,
    primary=false, 
    secondary=false, 
    outline=false, 
    white=false, 
    circle=false, 
    rounded=false, 
    btn_xl=false,
    btn_m=false,
    btn_s=false,
    onClick, 
    children, 
    className, 
    ...passprops 
}) {
    const props = {
        to,
        href,
        onClick,
        ...passprops
    }

    const classes = clsx(styles.btnWrapper, {
        [className]: className,
        [styles.primary]: primary,
        [styles.secondary]: secondary,
        [styles.circle]: circle,
        [styles.rounded]: rounded,
        [styles.outline]: outline,
        [styles.btn_xl]: btn_xl,
        [styles.btn_m]: btn_m,
        [styles.btn_s]: btn_s,
    })

    let Type = 'button';
    if (to) {
        Type = Link;
    } else if (href) {
        Type = 'a';
    }

  return (
    <Type className={classes} {...props}>
        <span>
            {children}
        </span>
    </Type>
  )
}

Button.propTypes = {
    to: PropTypes.string,
    href: PropTypes.string,
    primary: PropTypes.bool,
    secondary: PropTypes.bool,
    circle: PropTypes.bool,
    rounded: PropTypes.bool,
    onClick: PropTypes.func,
    children: PropTypes.node.isRequired,
    className: PropTypes.string
}

export default Button