import clsx from 'clsx'
import React from 'react'
import PropTypes from 'prop-types';

import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import styles from "./MainLayout.module.scss"


function MainLayout({ children }) {
  return (
    <>
        <Sidebar />
        <div >
            <Header />
            <div className={clsx(styles.content)}>
              {children}
            </div>
        </div>
    </>
  )
}

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default MainLayout