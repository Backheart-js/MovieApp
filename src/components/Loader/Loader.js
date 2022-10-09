import React, {useRef, useEffect} from 'react'
import { ThreeCircles } from 'react-loader-spinner'
import PropTypes from 'prop-types'

import styles from './Loader.module.scss';

function Loader({ dependencies }) {
    const loaderRef = useRef(null);

    useEffect(() => {
        loaderRef.current.style.display = 'flex';

        const loaderTimeout = setTimeout(() => {
          loaderRef.current.style.display = 'none';
        }, 1000)
    
        return () => {
          clearTimeout(loaderTimeout);
        }
    }, [dependencies])
    

  return (
    <div ref={loaderRef} className={styles.loader}>
        <ThreeCircles
          height="100"
          width="100"
          color="#F37515"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel="three-circles-rotating"
          outerCircleColor=""
          innerCircleColor=""
          middleCircleColor=""
        />
      </div>
  )
}

export default Loader