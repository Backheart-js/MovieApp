import React, { useEffect, useState } from 'react';
import HeroSlider, { Overlay, Slide, MenuNav } from "hero-slider";

import apiConfig from '../../config/apiConfig';
import tmdbAPI, { movieType } from '../../utils/tmdbAPI';
import styles from './HeroSlider.module.scss';
import clsx from 'clsx';
import Button from '../Button';
import Icon from '../Icon';
import { faInfoCircle, faPlay } from '@fortawesome/free-solid-svg-icons';

function Heroslider({ ...props }) {
  const [movieSlider, setMovieSlider] = useState([]);

  useEffect(() => {
    const getMovie = async () => {
      const params = { 
        page: 1,
      };
      try {
        const response = await tmdbAPI.getMoviesList(movieType.popular, {params});
        setMovieSlider(response.slice(13,18));
      } catch (error) {
        console.log(error);
      }
    }
    getMovie();
  }, [])

  return (
    <HeroSlider
    height={"100vh"}
    autoplay={{
      autoplayDuration: 6000
    }}
    controller={{
      initialSlide: 1,
      slidingDuration: 500,
      slidingDelay: 100,
      onSliding: (nextSlide) =>
      console.debug("onSliding(nextSlide): ", nextSlide),
      onBeforeSliding: (previousSlide, nextSlide) =>
      console.debug(
        "onBeforeSliding(previousSlide, nextSlide): ",
        previousSlide,
        nextSlide
        ),
        onAfterSliding: (nextSlide) =>
        console.debug("onAfterSliding(nextSlide): ", nextSlide)
      }}>

      {
        movieSlider.map((item, index) => {
          const background = `${apiConfig.originalImage(item.backdrop_path)}`
          console.log(background);
          return (
            <Slide 
              key={index} 
              label="Fall"
              background={{
                backgroundImage: background,
                backgroundAttachment: "fixed"
              }}
            >
              <div className={styles.overlay}>
                <div className={clsx(styles.billboard)}>
                  <div className={clsx(styles.billboardTitle, 'text-gray-200')} title={item.title}>
                      {item.title}
                  </div>
                  <div className={clsx(styles.billboardDescription)}>
                    <span className={clsx(styles.billboardDescText)}>
                      {item.overview}
                    </span>
                  </div>
                  <div className={clsx(styles.billboardBtnFunc)}>
                    <Button to={`/view/id=${item.id}`}  primary rounded btn_xl className={clsx(styles.billboardBtnPlay)}>
                      <Icon className={clsx(styles.iconPlay, 'mr-2')} icon={faPlay} primary/>
                      Play
                    </Button>
                    <Button to={`/infomation/id=${item.id}`} secondary rounded btn_xl className={clsx(styles.billboardBtnPlay)}>
                      More infomation
                      <Icon className={clsx(styles.iconInfo, 'ml-2')} icon={faInfoCircle} secondary />
                    </Button>
                  </div>
                </div>
              </div>
            </Slide>)
        })
      }
    </HeroSlider>
  )
}

export default Heroslider