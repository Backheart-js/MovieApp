import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import List from '../../components/List/List';

function ListMovie() {
  const paramsURL = useParams();
  console.log(paramsURL);

  return (
    <div className='mt-[140px]'>
      <List category={paramsURL.category} type={paramsURL.type} keyword={paramsURL.keyword}/>
    </div>
  )
}

export default ListMovie