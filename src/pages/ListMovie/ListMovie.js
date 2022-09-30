import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import List from '../../components/List/List';

function ListMovie() {
  const paramsURL = useParams();

  return (
    <div className='mt-[140px]'>
      <List category={paramsURL.category} type={paramsURL.type} />
    </div>
  )
}

export default ListMovie