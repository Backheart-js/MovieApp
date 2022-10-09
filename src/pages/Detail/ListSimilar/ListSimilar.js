import React from 'react'
import { useParams } from 'react-router-dom'
import SlickCarousel from '../../../components/SlickCarousel/SlickCarousel'

import styles from '../Detail.module.scss'

function ListSimilar({ category, id }) {
  return (
    <div className={styles.similarWrapper}>
        <header className={styles.headerDetail}>
            Similar
        </header>
        <hr className='w-full bg-gray-600 mb-3'/>
        <SlickCarousel 
            category={category} 
            type={'similar'} 
            id={id}
            infinite={true}
            speed={500}
            slidesToShow={6}
            slidesToScroll={1}
            arrows={true}
        />
    </div>
  )
}

export default ListSimilar