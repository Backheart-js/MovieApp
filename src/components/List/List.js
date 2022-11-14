import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types'

import styles from './List.module.scss'
import tmdbAPI from '../../utils/tmdbAPI';
import SlickItem from '../SlickCarousel/SlickItem';
import clsx from 'clsx';
import Button from '../Button';
import Item from './Item';
import Loader from '../Loader/Loader';
import { useParams } from 'react-router-dom';

function List({ type }) {
  const [listData, setListData] = useState([])
  const [page, setPage] = useState(1)
  const [totalPage, setTotalPage] = useState()
  // const [keyword, setkeyword] = useState()
  const [classify, setClassify] = useState('movie');
  const { category, keyword } = useParams()
  // const debounce = useDebounce(keyword, 1000);

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
          setClassify(category)
        } 
        else if (category === 'search') {
          const params = {
            query: encodeURI(keyword),
            page: page
          }

          const dataMoive = await tmdbAPI.search('movie', {params})
          const dataTv = await tmdbAPI.search('tv', {params})
          const response = dataMoive.results.concat(dataTv.results);
          setListData(response);
          setTotalPage(dataMoive.total_pages) 
        }
      } catch (error) {
          console.log(error);
      }
    }
    
    getData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [keyword])
  
  const handleLoadMore = async () => {
    const params = {
      page: page+1,
    }

    try {
      if (category === 'movie') {
        //Call tmdbAPI
        const response = await tmdbAPI.getMoviesList(type, {params});
        setListData(prev => [...prev, ...response.results]);
      } else if (category === 'tv') {
        const response = await tmdbAPI.getTvList(type, {params});
        setListData(prev => [...prev, ...response.results]);  
      } 
      else if (category === 'search') {
        const params = {
          query: encodeURI(keyword),
          page: page
        }
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

  return (
    <div className="listMovie">
      {category === "search" && 
      <div className='container px-[60px] mb-6'>
        <span className='text-lg font-semibold text-gray-600'>Result for: </span>
        <span className="text-3xl font-bold ml-2">{keyword}</span>
      </div>}
      <div className='grid lg:grid-cols-6 lg:gap-6 md:grid-col-4 md:gap-4 sm:grid-cols-3 sm:gap-3 container px-[60px]'>
        {listData.map((item, index) => (
            <Item data={item} category={classify} key={index}/>
        ))}
      </div>
      {
        page < totalPage && 
          <div className="mt-8 flex justify-center">
            <Button onClick={handleLoadMore} primary rounded btn_m>Load more</Button>
          </div>
      }
      <Loader dependencies={keyword} />
    </div>
  )
}

export default List