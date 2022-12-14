import clsx from 'clsx'
import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ThreeCircles } from 'react-loader-spinner'

import Button from '../../components/Button/Button'
import apiConfig from '../../config/apiConfig'
import tmdbAPI from '../../utils/tmdbAPI'
import styles from './Detail.module.scss'
import ListCast from './ListCast/ListCast'
import ListSimilar from './ListSimilar/ListSimilar'
import ListVideo from './ListVideo/ListVideo'
import Loader from '../../components/Loader/Loader'

function Detail() {
  const { category, id } = useParams();
  const [detail, setDetail] = useState({});
  
  useEffect(() => {
    const getData = async () => {
      const params = {
        language:'en-US'
      }
      try {
        const response = await tmdbAPI.detail(category, id, {params});
        setDetail(response);
        window.scrollTo(0, 0);
      } catch (error) {
          console.log(error);
        }
    }
  
    getData();
  }, [category, id])
  
  return (
    <div className='relative'>
      <div className={clsx(styles.banner, 'bg-no-repeat	bg-center	bg-cover lg:h-[850px] md:h-[550px] max-h-screen')} 
          style={{'backgroundImage': `url(${apiConfig.originalImage(detail.backdrop_path || detail.poster_path)})`}}
      >
        <div className={styles.informationWrapper}>
          <div className={styles.posterWrapper}>
            <div className={styles.imgWrapper}>
              <img className={styles.posterImg} src={apiConfig.w500Image(detail.poster_path)} alt="" />
              <div className={styles.btnWrapper}>
                <Button rounded primary btn_m href={detail.homepage} target='_blank'>Play</Button>
                <Button rounded secondary btn_m>Trailer</Button>
              </div>
            </div>
          </div>
          <div className={clsx(styles.detailWrapper, 'select-none pl-4')}>
            <div className={clsx(styles.title, 'text-[#F37515]')}>
              <h1 className='text-5xl font-semibold'>{detail.name || detail.title}</h1>
            </div>
            <div className={styles.tagline}>
              <span className="text-gray-500 dark:text-gray-200">
                {detail.tagline}
              </span>
            </div>
            <div className={styles.episode}>
              {
                category === 'tv' ?
                <p className="numberEpisodes">
                  Number of episodes: <span className='ml-2'>{detail.number_of_episodes} episodes</span>
                </p>
                :
                <p className="timeEpisode">
                  Runtime: <span className='text-gray-500 dark:text-gray-200 ml-2'>{detail.runtime} minutes</span>
                </p>
              }
            </div>
            <div className={styles.genres}>
              <p className="mb-1">Genres: </p>
              <div className="genresWrapper flex">
                {detail.genres && detail.genres.slice(0, 3).map((genre, index) => (
                  <div className={clsx(styles.genreBox, 'text-gray-500 dark:text-gray-200 border-gray-100')} key={index}>
                    {genre.name}
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.languages}>
              <div className="title">
                <span>Languages: </span>
              </div>
              <div className="d-flex ml-2">
                {detail.spoken_languages !== undefined && detail?.spoken_languages.slice(0,4).map((language, index) => (
                  <span className={styles.languageText} key={index}>
                    { language.english_name || language.name }  
                  </span>
                ))}
              </div>
            </div>
            <div className={styles.views}>
              <span className="">
                Views: <span className="text-gray-500 dark:text-gray-200 ml-2">{detail.popularity}</span>
              </span>
            </div>
            <div className={styles.rating}>
              <span className='mr-3'>Rating: </span>
              <div class="flex items-center">
                <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                <svg aria-hidden="true" class="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                <p class="ml-2 text-base font-medium text-gray-500 dark:text-gray-200 select-none">{detail.vote_count} votes</p>
              </div>
            </div>
            <div className={styles.releaseDate}>
              <span className=''>Release date: <span className='text-gray-500 dark:text-gray-200 ml-2'>{detail.last_air_date || detail.release_date}</span></span>
            </div>
          </div>
        </div>
      </div>
      
      <div className='lg:w-[70%] md:w-[90%] mx-auto'>
        <div className={clsx(styles.overviewWrapper, 'mb-10')}>
          <header className={styles.headerDetail}>
            Overview
          </header>
          <hr className='w-full bg-gray-600 mb-3'/>
          <p className={clsx(styles.overview, styles.contentDetail)}>
            {detail.overview}
          </p>
        </div>
        <div className={clsx(styles.castWrapper, 'mb-10')}>
          <header className={styles.headerDetail}>
            Casts
          </header>
          <hr className='w-full bg-gray-600 mb-3'/>
          <ListCast />
        </div>
        <div className={clsx(styles.ListVideo, 'mb-10')}>
          <ListVideo category={category} id={id} />
        </div>
      </div>

      <div className={styles.similar}>
        <ListSimilar category={category} id={id} />
      </div>

      <Loader dependencies={[category, id]} />
    </div>
  )
}

export default Detail