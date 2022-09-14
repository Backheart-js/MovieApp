import clsx from 'clsx'
import React from 'react'
import PropTypes from 'prop-types';

import Header from '../components/Header'
import styles from "./HeaderOnly.module.scss"
import Footer from '../components/Footer';
import Space from '../components/Space/Space';


function HeaderOnly({ children }) {
  return (
    <div className={clsx()}>
        <Header />
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

HeaderOnly.propTypes = {
  children: PropTypes.node.isRequired,
}

export default HeaderOnly