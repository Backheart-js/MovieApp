import clsx from 'clsx'
import React from 'react'
import PropTypes from 'prop-types';

import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import styles from "./MainLayout.module.scss"
import Footer from '../components/Footer';


function MainLayout({ children }) {
  return (
    <div className={clsx()}>
        <Header />
        <Sidebar />
        <div className={clsx('md:ml-[240px] md:w-[calc(100% - 240px)] mt-[68px]')}>
          <main className={clsx(styles.content, 'py-8 px-8')}>
            {children}
          </main>
          <Footer />
        </div>
    </div>
  )
}

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default MainLayout