import React from 'react'
import { useRecordContext } from 'react-admin'
import { Product } from '../types'

const ListTag = () => {
  const record = useRecordContext<Product>().tags

  return
  <div>
    {record.map((item, index) => (
      <ul>
        <li key={index}>item</li>
      </ul>
    ))}
  </div>
}

export default ListTag
