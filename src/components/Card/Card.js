import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import styles from './Card.module.scss'
import tmdbAPI from '../../utils/tmdbAPI';
import apiConfig from '../../config/apiConfig';
import clsx from 'clsx';
import SlickItem from '../SlickCarousel/SlickItem';

function Card({ className, category, data = [], ...props }) {
  const [genresListFromAPI, setGenresListFromAPI] = useState([])
  const [genresMovie, setGenresMovie] = useState([])
  console.log(data);

  const poster_img = apiConfig.originalImage(data.backdrop_path);

  const findGenders = (id) => {
    return genresListFromAPI.find((genre) => {
      return genre.id === id;
    })
  }

  useEffect(() => {
    const getData = async () => {
      const params = {
        language:'en-US'
      }
      try {
        const response = await tmdbAPI.genre(category, {params});
        setGenresListFromAPI(response.genres)
        // console.log(response.genres);
        // console.log(data.genre_ids);
  
      } catch (error) {
        throw error;
      }
    }
    
    getData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="">
      <SlickItem data={data} />
      <span titile={data.name || data.original_name || data.original_title || data.title} className={clsx(styles.cardTitle,'text-base text-center font-bold tracking-tight text-gray-900 dark:text-white')}>
        {data.name || data.original_name || data.original_title || data.title}
      </span>
    </div>
  )
}

export default Card