import React, { useState } from 'react'

function Catalog({ data, ...props }) {
  const [listData, setListData] = useState(data)

  return (
    <div>Catalog</div>
  )
}

export default Catalog