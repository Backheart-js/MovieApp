import clsx from 'clsx'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import apiConfig from '../../config/apiConfig'

import tmdbAPI from '../../utils/tmdbAPI'
import styles from './Detail.module.scss'

function Detail() {
  const { category, id } = useParams()
  const [detail, setDetail] = useState({})
  
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
  
  console.log(detail);

  return (
    <div>
      <div className={clsx(styles.banner, 'bg-no-repeat	bg-center	bg-cover lg:h-[850px] md:h-[550px] max-h-screen')} 
          style={{'backgroundImage': `url(${apiConfig.originalImage(detail.backdrop_path || detail.poster_path)})`}}>
        <div className={styles.informationWrapper}>
          <div className={styles.posterWrapper}>

          </div>
          <div className={styles.detailWrapper}>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Detail