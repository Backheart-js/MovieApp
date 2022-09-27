import { faBell, faUser } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import clsx from 'clsx'
import React, { Fragment, useRef, useEffect } from 'react'
import { NavLink, Link, useParams } from 'react-router-dom'

import styles from './Header.module.scss'

function Header() {
  const Header = useRef()
  const mainHeaderRef = useRef();
  const subHeaderRef = useRef();
  let params = useParams();

  // Sự kiện scroll để hide header
  const handleScroll = () => {
    console.log(Header.current);
    console.log(window.pageYOffset + 'px');
    if (window.pageYOffset >= '100') {
      Header.current.style.backgroundColor = '#000'
      if (subHeaderRef.current) {
        mainHeaderRef.current.style.display = 'none';
      }
    }
    else {
      Header.current.style.backgroundColor = 'transparent'
      mainHeaderRef.current.style.display = 'grid'
    }
  }

  const subHeaderRender = (key, index) => {
    let Link = 'a'
    let classes = "inline-flex items-center text-base font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"

    if (index === Object.keys(params).length - 1) {
      Link = 'span';
      classes = "inline-flex items-center text-3xl font-semibold text-gray-200 select-none"
    }
  
    return (
      <li key={index} className="inline-flex items-center">
        <Link href="" className={classes}>
          {
            index === 0 ? 
            <Fragment></Fragment>
            :
            <svg class="w-6 h-6 text-gray-400 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
          }
          {(params[key].charAt(0).toUpperCase() + params[key].slice(1)).replaceAll('_',' ')}
        </Link>
      </li>
    )
  }

  useEffect(() => {
    // Sự kiện scroll để hide header
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [])  

  return (
    <header ref={Header} className={clsx(styles.header, 'container', 'flex flex-col', 'fixed z-10', 'top-0', 'inset-x-0', 'pl-12')}>
      <div ref={mainHeaderRef} className={clsx(styles.mainHeader,'container', 'h-[68px]', 'grid', 'grid-cols-12', 'gap-x-4', 'justify-center', 'items-center', )}>
        <div className={clsx(styles.headerLogoWrapper, 'col-span-2','text-left')}>
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
      </div>
      
      {Object.keys(params).length >= 1 ?
        <nav ref={subHeaderRef} className={clsx(styles.subHeader, 'flex h-[68px]')} aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            {Object.keys(params).map((key, index) => subHeaderRender(key, index))}
          </ol>
        </nav>
        :
        <nav className='d-none'></nav>
      }
    </header>
  )
}

export default Header