import React from 'react'
import Slider from 'react-slick'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState, useEffect } from 'react';
import tmdbAPI from '../../utils/tmdbAPI';
import SlickItem from './SlickItem';
import styles from './SlickCarousel.module.scss'

function SlickCarousel({ category, type, ...props }) {
  const [getList, setGetList] = useState([])

  useEffect(() => {
    if (category === 'movie') {
      const getMovie = async () => {
        const params = {
          page: 1
        };
        try {
          const response = await tmdbAPI.getMoviesList(type, {params});
          if (response !== undefined) {
            setGetList(response.results);
          }
        } catch (error) {
          throw error;
        }
      }
      getMovie();
    } else if (category === 'tv') {
      const getTvseries = async () => {
        const params = {
          page: 1
        };
        try {
          const response = await tmdbAPI.getTvList(type, {params});
          if (response !== undefined) {
            setGetList(response.results);
          }
        } catch (error) {
          throw error;
        }
      }
      getTvseries();
    }  
  }, [category, type])
  
  return (
    <Slider
        {...props}
    >
        {getList.map((item, index) => {

          return (
            <SlickItem className={'py-1 px-2'} data={item} key={index} />
          )
        })}
    </Slider>
  )
}

export default SlickCarousel