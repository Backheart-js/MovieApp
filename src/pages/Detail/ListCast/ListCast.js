import clsx from 'clsx';
import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import apiConfig from '../../../config/apiConfig';

import tmdbAPI from '../../../utils/tmdbAPI'
import styles from '../Detail.module.scss'

function ListCast(props) {
    const [castList, setCastList] = useState([]);
    const {category, id} = useParams();

    useEffect(() => {
      const getData = async () => {
        const params = {
            language:'en-US',
        }
        try {
            const response = await tmdbAPI.credits(category, id, {params});
            setCastList(response.cast.slice(0, 6))
        } catch (error) {
            console.log(error);
        }
      }
    
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id])
    
  return (
    <div className={clsx(styles.ListCast, 'grid lg:grid-cols-6 lg:gap-4 md:grid-cols-3 md:gap-1')}>
        {castList.map((cast, index) => (
            <CastCard dataCast={cast} key={index} />
        ))}
    </div>
  )
}

function CastCard({ dataCast, ...props }) {
    const castImg = apiConfig.w500Image(dataCast.profile_path)

    return (
        <div className={styles.castCardWrapper} key={props.key}>
            <img src={castImg} alt="" className={styles.castImg} />
            <div className={styles.castName}>
                <span className="">
                    {dataCast.original_name}
                </span>
            </div>
        </div>
    )
} 

export default ListCast