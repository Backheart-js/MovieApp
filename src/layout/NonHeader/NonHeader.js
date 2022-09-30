import clsx from 'clsx'
import React from 'react'
import PropTypes from 'prop-types';

import styles from "./NonHeader.module.scss"
import Footer from '../components/Footer';
import Space from '../components/Space/Space';


function NonHeader({ children }) {
  return (
    <div className={clsx()}>
        <div className={clsx('md:w-[100%]')}>
          <main className={clsx(styles.content, 'pb-8')}>
            {children}
          </main>
          <Space />
          <Footer />
        </div>
    </div>
  )
}

NonHeader.propTypes = {
  children: PropTypes.node.isRequired,
}

export default NonHeader