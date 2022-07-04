import * as React from 'react'
import { useParams } from 'react-router'
import {
  Edit,
  SimpleForm,
  TextField,
  TextInput,
  required,
  useRecordContext,
  List,
  Datagrid,
  ResourceContextProvider,
  EditButton
} from 'react-admin'
import { Typography, Grid, Box } from '@mui/material'
import { Product } from '../types'
import SegmentsField from '../products/SegmentsField'

const TagTitle = () => {
  const record = useRecordContext<Product>()
  return record ? <span>Tag "{record.name}"</span> : null
}
const TagEdit = () => {
  const { tags } = useParams<'tags'>()
  return (
    <>
      <Edit title={<TagTitle />}>
        <SimpleForm>
          <Grid
            container
            spacing={2}
            style={{
              display: 'center',
              justifyContent: 'center'
            }}
          >
            <Grid item xs={12}>
              <Box display="flex" justifyContent="center">
                <Grid item xs={2}>
                  <Typography
                    fontWeight={600}
                    variant="subtitle2"
                    component="div"
                    children="Id"
                    fontSize={18}
                    m={2}
                  />
                </Grid>
                <Grid item xs={10} style={{ marginTop: '20px' }}>
                  <TextField source="id" fontSize={16} />
                </Grid>
              </Box>
              <Box display="flex" alignItems="center">
                <Grid item xs={2}>
                  <Typography
                    fontWeight={600}
                    variant="subtitle2"
                    component="div"
                    children="Tag Name"
                    fontSize={18}
                    m={2}
                  />
                </Grid>
                <Grid item xs={10}>
                  <TextInput
                    source="name"
                    label={false}
                    validate={[required()]}
                  />
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </SimpleForm>
      </Edit>
      <ResourceContextProvider value="products">
        <List
          hasCreate={false}
          resource="products"
          filter={{ tags: [tags] }}
          title=" "
        >
          <Datagrid>
            <TextField source="id" />
            <TextField source="name" textAlign="center" />
            <SegmentsField source="tags" />
            <EditButton />
          </Datagrid>
        </List>
      </ResourceContextProvider>
    </>
  )
}

export default TagEdit
