import { faBell, faUser } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import clsx from 'clsx'
import React from 'react'
import { NavLink, Link } from 'react-router-dom'

import styles from './Header.module.scss'

function Header() {
  return (
    <header className={clsx(styles.header, 'container', 'flex', 'h-[68px]', 'grid', 'grid-cols-12', 'gap-x-4', 'justify-center', 'items-center', 'fixed z-10', 'top-0', 'inset-x-0')}>
      <div className={clsx(styles.headerLogoWrapper, 'col-span-2','text-center')}>
        <Link to="/" className={clsx(styles.headerLogo, 'text-2xl', 'font-bold', 'select-none')}>My cinema</Link>
      </div>
      <div className={clsx('col-span-5 flex justify-end')}>
          <NavLink to="/" className={clsx(styles.headerLink, "text-gray-200 font-semibold", "items-center")}>
            <p>Home</p>
          </NavLink>
          <NavLink to="/movie" className={clsx(styles.headerLink, "text-gray-200 font-semibold", "items-center")}>
            <p>Movie</p>
          </NavLink>
          <NavLink to="/tv" className={clsx(styles.headerLink, "text-gray-200 font-semibold", "items-center")}>
            <p>TV Series</p>
          </NavLink>
          <NavLink to="/list" className={clsx(styles.headerLink, "text-gray-200 font-semibold", "items-center")}>
            <p>My list</p>
          </NavLink>
      </div>
      <div className={clsx(styles.headerFunctionWrapper, 'flex', 'justify-between', 'pl-16', 'pr-8', 'col-span-5', 'gap-x-4')}>
        <div className={clsx(styles.headerSearchWrapper, 'basis-96')}>
          <form className="flex items-center justify-end">   
            <label htmlFor="simple-search" className="sr-only">Search</label>
            <div className="relative w-full">
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" /></svg>
              </div>
              <input type="text" id="simple-search" className="bg-gray-900 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required />
            </div>
          </form>
        </div>
        <div className={clsx(styles.headerNotiContainer, 'relative', 'rounded-lg', 'bg-gray-800', 'hover:bg-gray-900')}>
          <FontAwesomeIcon className="text-lg text-gray-300" icon={faBell} />
        </div>
        <div className={clsx(styles.headerUserContainer, 'relative', 'rounded-lg', 'bg-gray-800', 'hover:bg-gray-900')}>
          <FontAwesomeIcon className="text-lg text-gray-300" icon={faUser} />
        </div>
      </div>
    </header>
  )
}

export default Header