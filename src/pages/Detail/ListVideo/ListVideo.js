import clsx from 'clsx';
import React, { useEffect, useState } from 'react'
import { useRef } from 'react';

import tmdbAPI from '../../../utils/tmdbAPI';
import styles from '../Detail.module.scss';

function ListVideo({ category, id }) {
  const [dataVideo, setDataVideo] = useState([])

    useEffect(() => {
      const getData = async () => {
        const response = await tmdbAPI.getVideo(category, id);
        setDataVideo(response.results.slice(0,4))
      }

      getData();

    }, [id])

  return (
    <div className='container'>
      {
        dataVideo.map((data, index) => (
          <Video data={data} key={index} />
        ))
      }
    </div>
  )
}

function Video({ data, ...props }) {
  const iframeRef = useRef(null);

  useEffect(() => {
    const iframeTag = iframeRef.current 
    const height = iframeTag.offsetWidth * 9/16 + 'px';
    iframeTag.setAttribute('height', height);
  }, [])
  

  return (
    <div className={styles.videoWrapper}>
      <header className='text-lg font-semibold mb-2 select-none'>
        {data.name}
      </header>

      <iframe 
        ref={iframeRef}
        width={'100%'} 
        src={`https://www.youtube.com/embed/${data.key}`} 
        title="YouTube video player" 
        frameBorder={0} 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen 
        {...props}
      />
    </div>
  )
}

export default ListVideo