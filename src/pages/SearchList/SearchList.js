import React from 'react'
import { useParams } from 'react-router-dom';
import List from '../../components/List/List'

function SearchList() {
  const paramsURL = useParams();
  console.log(paramsURL);

  return (
    <div className='mt-[140px]'>
      <List category={paramsURL.category} keyword={paramsURL.keyword} />
    </div>
  )
}

export default SearchList