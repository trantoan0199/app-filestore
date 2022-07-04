import React from 'react'
import { Box } from '@mui/material'
import { EditButton, ShowButton, useRecordContext } from 'react-admin'
import { Product } from '../types'

const ActionField = () => {
  const record = useRecordContext<Product>().action
  console.log(record)

  return (
    <Box>
      {record === 1 && <EditButton />}
      {record !== 1 && <ShowButton />}
    </Box>
  )
}

export default ActionField
