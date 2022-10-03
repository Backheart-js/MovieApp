import { faPlay, faPlus } from '@fortawesome/free-solid-svg-icons';
import clsx from 'clsx';
import React from 'react'
import { Link } from 'react-router-dom';
import apiConfig from '../../config/apiConfig';
import Button from '../Button';
import Icon from '../Icon';
import styles from './List.module.scss'

function Item({ data, className, category,...props }) {
  const poster = `${apiConfig.w500Image(data.poster_path)}`

  return (
      <Link className={clsx(styles.item, className)} to={`/${category}/infomation/id=${data.id}`} {...props}>
        <div className={styles.imgwrapper}>
          <img className={clsx(styles.img ,'rounded-lg md:h-[324px]')} src={poster} alt={data.title}/>
          <div className={styles.overlay}>
            <div className={styles.itemBtn}>
              <Button to={`/view/id=${data.id}`} className={clsx(styles.btnPlay, styles.funcBtn)} outline circle title={'Play'}>
                <Icon icon={faPlay} className={styles.iconPlay}/>
              </Button>
              <Button className={clsx(styles.btnAddList, styles.funcBtn)} outline circle title={'Add to list'}>
                <Icon icon={faPlus} className={styles.iconAddList}/>
              </Button>
            </div>
          </div>
        </div>
        <span title={data.name || data.original_name || data.original_title || data.title} className={clsx(styles.itemTitle,'text-base font-bold tracking-tight text-gray-900 dark:text-white')}>
          {data.name || data.original_name || data.original_title || data.title}
        </span>
      </Link>
  )
}

export default Item