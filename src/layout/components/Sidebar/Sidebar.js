import { faHouse, faTableList, faTv, faVideo } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import clsx from 'clsx'
import React from 'react'
import { NavLink } from 'react-router-dom'

import styles from './Sidebar.module.scss'

function Sidebar({ className }) {
  return (
    <div className={clsx(styles.sidebarWrapper, 'md:w-[240px] fixed z-10 bottom-0 left-0 top-[68px]', 'flex', 'flex-col', 'justify-start', 'pt-20')}>
      <ul className={clsx(styles.sidebarList)}>
        <li className={clsx(styles.sidebarItem, 'my-4', 'py-2')}>
          <NavLink to="/" className={clsx(styles.sidebarLink, "text-gray-200", "items-center")}>
            <FontAwesomeIcon className="mr-3 w-6" icon={faHouse} />
            <p>Home</p>
          </NavLink>
        </li>
        <li className={clsx(styles.sidebarItem, 'my-4', 'py-2')}>
          <NavLink to="/movie" className={clsx(styles.sidebarLink, "text-gray-200", "items-center")}>
            <FontAwesomeIcon className="mr-3 w-6" icon={faVideo} />
            <p>Movie</p>
          </NavLink>
        </li>
        <li className={clsx(styles.sidebarItem, 'my-4', 'py-2')}>
          <NavLink to="/tvseries" className={clsx(styles.sidebarLink, "text-gray-200", "items-center")}>
            <FontAwesomeIcon className="mr-3 w-6" icon={faTv} />
            <p>TV Series</p>
          </NavLink>
        </li>
        <li className={clsx(styles.sidebarItem, 'my-4', 'py-2')}>
          <NavLink to="/list" className={clsx(styles.sidebarLink, "text-gray-200", "items-center")}>
            <FontAwesomeIcon className="mr-3 w-6" icon={faTableList} />
            <p>My list</p>
          </NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar