import clsx from 'clsx'
import React from 'react'
import Heroslider from '../../components/HeroSlider'
import SlickCarousel from '../../components/SlickCarousel/SlickCarousel'
import Title from '../../components/Title/Title'

import styles from './Home.module.scss'

function Home({ props }) {
  return (
    <div>
      <Heroslider />
      <br/>
      <div className={clsx(styles.homeListWrapper)}>
        <div className={clsx(styles.trendingMoviesListWrapper, styles.homeCarousel)}>
          <Title navigation={`trending-movie`} title={'Trending Movies'}></Title>

          <SlickCarousel 
            infinite={true}
            speed={500}
            slidesToShow={4}
            slidesToScroll={1}
            arrows={true}
          >
            <div>
              <h3>1</h3>
            </div>
            <div>
              <h3>2</h3>
            </div>
            <div>
              <h3>3</h3>
            </div>
            <div>
              <h3>4</h3>
            </div>
            <div>
              <h3>5</h3>
            </div>
            <div>
              <h3>6</h3>
            </div>
          </SlickCarousel>
        </div>
        {/*  */}
        <div className={clsx(styles.topRatedMoviesListWrapper, styles.homeCarousel)}>
          <Title navigation={`top-movie`} title={'Top Rated Movies'}></Title>
          
          <SlickCarousel 
            infinite={true}
            speed={500}
            slidesToShow={4}
            slidesToScroll={1}
            arrows={true}
          >
            <div>
              <h3>1</h3>
            </div>
            <div>
              <h3>2</h3>
            </div>
            <div>
              <h3>3</h3>
            </div>
            <div>
              <h3>4</h3>
            </div>
            <div>
              <h3>5</h3>
            </div>
            <div>
              <h3>6</h3>
            </div>
          </SlickCarousel>
        </div>
        {/*  */}
        <div className={clsx(styles.TrendingTVListWrapper, styles.homeCarousel)}>
          <Title navigation={`trending-tvseries`} title={'Trending TV Series'}></Title>
          
          <SlickCarousel 
            infinite={true}
            speed={500}
            slidesToShow={4}
            slidesToScroll={1}
            arrows={true}
          >
            <div>
              <h3>1</h3>
            </div>
            <div>
              <h3>2</h3>
            </div>
            <div>
              <h3>3</h3>
            </div>
            <div>
              <h3>4</h3>
            </div>
            <div>
              <h3>5</h3>
            </div>
            <div>
              <h3>6</h3>
            </div>
          </SlickCarousel>
        </div>
        {/*  */}
        <div className={clsx(styles.topRatedTVListWrapper, styles.homeCarousel)}>
          <Title navigation={`top-tvseries`} title={'Top Rated TV Series'}></Title>
          
          <SlickCarousel 
            infinite={true}
            speed={500}
            slidesToShow={4}
            slidesToScroll={1}
            arrows={true}
          >
            <div>
              <h3>1</h3>
            </div>
            <div>
              <h3>2</h3>
            </div>
            <div>
              <h3>3</h3>
            </div>
            <div>
              <h3>4</h3>
            </div>
            <div>
              <h3>5</h3>
            </div>
            <div>
              <h3>6</h3>
            </div>
          </SlickCarousel>
        </div>
      </div>
    </div>
  )
}

export default Home