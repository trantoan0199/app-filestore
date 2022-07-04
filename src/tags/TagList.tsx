import * as React from 'react'
import { Datagrid, EditButton, List, Pagination, TextField } from 'react-admin'
import { Box } from '@mui/material'

const PostPagination = () => <Pagination rowsPerPageOptions={[5, 10, 25, 50]} />

export const TagList = () => (
  <Box maxWidth="50em">
    <List perPage={5} pagination={<PostPagination />}>
      <Datagrid>
        <TextField source="id" textAlign="center" />
        <TextField source="name" textAlign="center" />
        <EditButton />
      </Datagrid>
    </List>
  </Box>
)
