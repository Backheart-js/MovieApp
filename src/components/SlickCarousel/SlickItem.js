import { faPlay, faPlus } from '@fortawesome/free-solid-svg-icons';
import clsx from 'clsx';
import React from 'react'
import { Link } from 'react-router-dom';
import apiConfig from '../../config/apiConfig';
import Button from '../Button';
import Icon from '../Icon';
import styles from './SlickCarousel.module.scss'

function SlickItem({ data, ...props }) {
  const poster = `${apiConfig.w500Image(data.poster_path)}`

  return (
      <Link to={`/infomation/id=${data.id}`} {...props}>
        <img className={clsx(styles.slickImg ,'rounded')} src={poster} alt={data.title}/>
        <div className={styles.overlay}>
          <div className={styles.slickItemBtn}>
            <Button to={`/view/id=${data.id}`} className={clsx(styles.btnPlay, styles.funcBtn)} outline circle title={'Play'}>
              <Icon icon={faPlay} className={styles.iconPlay}/>
            </Button>
            <Button className={clsx(styles.btnAddList, styles.funcBtn)} outline circle title={'Add to list'}>
              <Icon icon={faPlus} className={styles.iconAddList}/>
            </Button>
          </div>
        </div>
      </Link>
  )
}

export default SlickItem