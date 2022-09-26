import clsx from 'clsx'
import React from 'react'
import Heroslider from '../../components/HeroSlider'
import SlickCarousel from '../../components/SlickCarousel/SlickCarousel'
import Title from '../../components/Title/Title'
import { category, movieType } from '../../utils/tmdbAPI'

import styles from './Home.module.scss'

function Home() {  

  return (
    <div>
      <Heroslider category={category.movie}/>
      <br/>
      <div className={clsx(styles.homeListWrapper)}>
        <div className={clsx(styles.trendingMoviesListWrapper, styles.homeCarousel)}>
          <Title title={'Trending Movies'} 
                  button buttonText={'View more'} 
                  category={category.movie} 
                  type={movieType.popular}
          />

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
          <Title title={'Top Rated Movies'}  
                  button buttonText={'View more'} 
                  category={category.movie} 
                  type={movieType.top_rated}/>
          
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
          <Title title={'Trending TV Series'}  
                  button buttonText={'View more'} 
                  category={category.tv} 
                  type={movieType.popular}/>
          
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
          <Title title={'Top Rated TV Series'}  
                  button buttonText={'View more'} 
                  category={category.tv} 
                  type={movieType.top_rated}/>
          
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