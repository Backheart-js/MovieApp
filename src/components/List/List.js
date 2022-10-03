import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types'

import styles from './List.module.scss'
import tmdbAPI from '../../utils/tmdbAPI';
import SlickItem from '../SlickCarousel/SlickItem';
import clsx from 'clsx';
import Button from '../Button';
import useDebounce from '../../hooks/useDebounce';
import Item from './Item';

function List({category, type, keyword}) {
  const [listData, setListData] = useState([])
  const [page, setPage] = useState(1)
  const [totalPage, setTotalPage] = useState()
  const [keyWord, setKeyWord] = useState()
  const debounce = useDebounce(keyWord, 1000);
  
  console.log(category);

  useEffect(() => {
    setKeyWord(keyword);
  
  }, [keyword])
  

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
          setTotalPage(response.total_pages)
        } 
        else if (category === 'tv') {
          const response = await tmdbAPI.getTvList(type, {params});
          setListData(response.results);
          setTotalPage(response.total_pages)  
        } 
        else if (category === 'search') {
          const params = {
            query: encodeURI(debounce),
            page: page
          }

          let response = await tmdbAPI.search('movie', {params})
          setListData(response.results);
          console.log(listData);
          response = await tmdbAPI.search('tv', {params})
          setListData([...listData, ...response.results]);
          setTotalPage(response.total_pages) 
        }
      } catch (error) {
            
      }
    }
    
    getData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debounce])
  
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
      } 
      else if (category === 'search') {
        const params = {
          query: encodeURI(debounce),
          page: page
        }
        console.log(debounce);
        let response = await tmdbAPI.search('movie', {params})
        setListData(response.results);
        response = await tmdbAPI.search('tv', {params})
        setListData([...listData, ...response.results]);
        setTotalPage(response.total_pages) 
      }
    } catch (error) {
          
    }
    setPage(prev => prev+1);
  }

  console.log(listData);
  return (
    <div className="listMovie">
      <div className='grid lg:grid-cols-6 lg:gap-6 md:grid-col-4 md:gap-4 sm:grid-cols-3 sm:gap-3 container px-[60px]'>
        {listData.map((item, index) => (
            <Item data={item} category={category} key={index}/>
        ))}
      </div>
      {
        page < totalPage && 
          <div className="mt-8 flex justify-center">
            <Button onClick={handleLoadMore} primary rounded btn_m>Load more</Button>
          </div>
      }
    </div>
  )
}

export default List