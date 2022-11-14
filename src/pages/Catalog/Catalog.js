import clsx from 'clsx';
import React, { useState, useLayoutEffect } from 'react';
import { useParams } from 'react-router-dom';
import Heroslider from '../../components/HeroSlider/HeroSlider';

import { category, movieType, tvType } from '../../utils/tmdbAPI';
import SlickCarousel from '../../components/SlickCarousel/SlickCarousel'
import Title from '../../components/Title/Title'
import styles from './Catalog.module.scss'
import Loader from '../../components/Loader/Loader';

function Catalog({ data, ...props }) {
  let paramsURL = useParams();
  const [typeCategory, setTypeCategory] = useState(paramsURL.category)

  useLayoutEffect(() => {
    setTypeCategory(paramsURL.category);
  }, [paramsURL.category])
  
  const loopMovies = (key, index) => {
    return (
      <div key={index} className={clsx(styles.movieListWrapper, styles.list)}>
        <Title title={(movieType[key].charAt(0).toUpperCase() + movieType[key].slice(1)).replace('_',' ')} 
                button buttonText={'View more'} 
                category={category.movie} 
                type={movieType[key]}
        />

        <SlickCarousel 
          category={category.movie}
          type={movieType[key]}
          infinite={true}
          speed={500}
          slidesToShow={6}
          slidesToScroll={1}
          arrows={true}
        />
      </div>
    )
  }

  const loopTv = (key, index) => {
    return (
      <div key={index} className={clsx(styles.tvListWrapper, styles.list)}>
        <Title title={(tvType[key].charAt(0).toUpperCase() + tvType[key].slice(1)).replaceAll('_',' ')} 
                button buttonText={'View more'} 
                category={category.tv} 
                type={tvType[key]}
        />

        <SlickCarousel 
          category={category.tv}
          type={tvType[key]}
          infinite={true}
          speed={500}
          slidesToShow={6}
          slidesToScroll={1}
          arrows={true}
        />
      </div>
    )
  }

  return (
    <div>
      <Heroslider category={category[paramsURL.category]}/>
      <br/>
      <div className={styles.homeListWrapper}>
      {
        (
          typeCategory === 'movie' && Object.keys(movieType).map((key, index) => loopMovies(key, index))
        )
        ||
        (
          typeCategory === 'tv' && Object.keys(tvType).map((key, index) => loopTv(key, index))
        )
      }
      </div>
      <Loader dependencies={paramsURL.category} />
    </div>
  )
}

export default Catalog