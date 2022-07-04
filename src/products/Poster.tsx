import * as React from 'react'
import { Card, CardMedia, Box, Typography } from '@mui/material'
import { useRecordContext } from 'react-admin'
import { Product } from '../types'

const Poster = () => {
  const record = useRecordContext<Product>()

  if (!record) return null
  return (
    <Box>
      <Card
        sx={{
          display: 'flex',
          maxWidth: '100%',
          maxHeight: '350px'
        }}
      >
        <CardMedia
          component="img"
          src={`http://192.168.2.16:7979/filestore/picture/${record.fileId}/300/400/${record.name}`}
          alt={record.name}
        />
      </Card>
      <Typography
        component="div"
        children={record.size}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#8B8B8B'
        }}
      />
    </Box>
  )
}

export default Poster
