import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

import tmdbAPI from '../../utils/tmdbAPI';

function Genre() {
  const paramsURL = useParams();
  const [listData, setListData] = useState([])

  useEffect(() => {
    const getData = async () => {
      const params = {
        page: 1,
      }
      
      try {
        if (paramsURL.category === 'movie') {
          //Call tmdbAPI
          const response = await tmdbAPI.getMoviesList(paramsURL?.genre, {params});
          setListData(response);
        } else if (paramsURL.category === 'tv') {
          const response = await tmdbAPI.getTvList(paramsURL?.genre, {params});
          setListData(response);  
        } else {

        }
      } catch (error) {
            
      }
    }

    getData();
  }, [])
  
  console.log(listData);
  return (
    <div>Genre</div>
  )
}

export default Genre