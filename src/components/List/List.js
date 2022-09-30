import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types'

import styles from './List.module.scss'
import tmdbAPI from '../../utils/tmdbAPI';
import Card from '../Card/Card';
import SlickItem from '../SlickCarousel/SlickItem';
import clsx from 'clsx';
import Button from '../Button';

function List({category, type}) {
  const [listData, setListData] = useState([])
  const [page, setPage] = useState(1)
  const [totalPage, setTotalPage] = useState()

  useEffect(() => {
    const getData = async () => {
      const params = {
        page: page,
      }
      
      try {
        if (category === 'movie') {
          //Call tmdbAPI
          const response = await tmdbAPI.getMoviesList(type, {params});
          console.log(response);
          setListData(response.results);
          // console.log(response.request);
        } else if (category === 'tv') {
          const response = await tmdbAPI.getTvList(type, {params});
          setListData(response.results);  
        } else {

        }
      } catch (error) {
            
      }
    }
    
    getData();
  }, [])

  console.log(listData);

  const handleLoadMore = async () => {
    const params = {
      page: page+1,
    }

    try {
      if (category === 'movie') {
        //Call tmdbAPI
        const response = await tmdbAPI.getMoviesList(type, {params});
        setListData(prev => [...prev, ...response.results]);
        // console.log(response.request);
      } else if (category === 'tv') {
        const response = await tmdbAPI.getTvList(type, {params});
        setListData(prev => [...prev, ...response.results]);  
      } else {

      }
    } catch (error) {
          
    }
    setPage(prev => prev+1);
  }

  return (
    <div className="listMovie">
      <div className='grid grid-cols-6 gap-6 container px-[60px]'>
        {listData.map((item, index) => (
          <div className="" key={index}>
            <SlickItem data={item}/>
            <span title={item.name || item.original_name || item.original_title || item.title} className={clsx(styles.cardTitle,'text-base text-center font-bold tracking-tight text-gray-900 dark:text-white')}>
              {item.name || item.original_name || item.original_title || item.title}
            </span>
          </div>
        ))}
      </div>
      <div className="mt-8 flex justify-center">
        <Button onClick={handleLoadMore} primary rounded btn_m>Load more</Button>
      </div>
    </div>
  )
}

export default List