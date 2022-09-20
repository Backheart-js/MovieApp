import clsx from 'clsx'
import React, { useState, useEffect } from 'react'
import Heroslider from '../../components/HeroSlider'
import SlickCarousel from '../../components/SlickCarousel/SlickCarousel'
import Title from '../../components/Title/Title'
import tmdbAPI, { category, movieType, tvType } from '../../utils/tmdbAPI'

import styles from './Home.module.scss'

function Home({ props }) {
  const [movieList, setMovieList] = useState({});


  useEffect(() => {
    const getMovie = async () => {
      const params = { 
        page: 1,
      };
      try {
        const response = await tmdbAPI.getMoviesList(movieType.popular, {params});
        setMovieList(response);

      } catch (error) {
        console.log(error);
      }
    }

    getMovie();
  
  }, [])
  

  return (
    <div>
      <Heroslider/>
      <br/>
      <div className={clsx(styles.homeListWrapper)}>
        <div className={clsx(styles.trendingMoviesListWrapper, styles.homeCarousel)}>
          <Title navigation={`trending-movie`} title={'Trending Movies'}></Title>

          <SlickCarousel 
            category={category.movie}
            type={movieType.popular}
            infinite={true}
            speed={500}
            slidesToShow={6}
            slidesToScroll={1}
            arrows={true}
          />
        </div>
        {/*  */}
        <div className={clsx(styles.topRatedMoviesListWrapper, styles.homeCarousel)}>
          <Title navigation={`top-movie`} title={'Top Rated Movies'}></Title>
          
          <SlickCarousel 
            category={category.movie}
            type={movieType.top_rated}
            infinite={true}
            speed={500}
            slidesToShow={6}
            slidesToScroll={1}
            arrows={true}
          />
        </div>
        {/*  */}
        <div className={clsx(styles.TrendingTVListWrapper, styles.homeCarousel)}>
          <Title navigation={`trending-tvseries`} title={'Trending TV Series'}></Title>
          
          <SlickCarousel 
            category={category.tv}
            type={movieType.popular}
            infinite={true}
            speed={500}
            slidesToShow={6}
            slidesToScroll={1}
            arrows={true}
          />
        </div>
        {/*  */}
        <div className={clsx(styles.topRatedTVListWrapper, styles.homeCarousel)}>
          <Title navigation={`top-tvseries`} title={'Top Rated TV Series'}></Title>
          
          <SlickCarousel 
            category={category.tv}
            type={movieType.top_rated}
            infinite={true}
            speed={500}
            slidesToShow={6}
            slidesToScroll={1}
            arrows={true}
          />
        </div>
      </div>
    </div>
  )
}

export default Home