import * as React from 'react'
import {
  AutocompleteInput,
  Datagrid,
  DateField,
  DateInput,
  EditButton,
  List,
  NumberField,
  Pagination,
  ReferenceInput,
  ShowButton,
  TextField,
  TextInput
} from 'react-admin'
import { Product } from '../types'
import ThumbnailField from './ThumbnailField'

const PostPagination = () => <Pagination rowsPerPageOptions={[5, 10, 25, 50]} />
const postFilters = [
  <TextInput label="Search" source="q" alwaysOn />,
  <DateInput source="created_time" />,
  <DateInput source="download_time" />,
  <ReferenceInput source="id" reference="products">
    <AutocompleteInput
      optionText={(choice?: Product) => (choice?.id ? `${choice.tags}` : '')}
    />
  </ReferenceInput>
]

export const ProductList = () => (
  <List
    perPage={5}
    pagination={<PostPagination />}
    filters={postFilters}
    sort={{ field: 'created_time', order: 'desc' }}
  >
    <Datagrid>
      <ThumbnailField label="" />
      <TextField source="id" textAlign="center" />
      <TextField source="name" textAlign="center" />
      {/* <DateField source="created_time" textAlign="center" /> */}
      {/* <DateField source="download_time" textAlign="center" /> */}
      {/* <NumberField source="download_total" textAlign="center" /> */}
      <ShowButton label="" />
      <EditButton label="" />
    </Datagrid>
  </List>
)
