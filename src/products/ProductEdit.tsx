import { Grid, Typography } from '@mui/material'
import * as React from 'react'
import {
  AutocompleteArrayInput,
  Edit,
  FormTab,
  ListButton,
  ReferenceArrayInput,
  required,
  ShowButton,
  TabbedForm,
  TextField,
  TextInput,
  TopToolbar,
  useRecordContext
} from 'react-admin'
import { Product } from '../types'
import Poster from './Poster'

const ProductTitle = () => {
  const record = useRecordContext<Product>()
  return record ? <span>Image "{record.name}"</span> : null
}

const ProductEdit = () => {
  return (
    <Edit title={<ProductTitle />}>
      <TabbedForm>
        <FormTab label="image">
          <Grid container spacing={2}>
            <Grid item sm={6} xs={12}>
              <Poster />
            </Grid>
            <Grid item sm={6} xs={12}>
              <Grid container sm={12} xs={12}>
                <Grid item sm={3}>
                  <Typography variant="subtitle1" children="ID" />
                </Grid>
                <Grid item sm={9}>
                  <TextField source="id" />
                </Grid>
                <Grid item sm={3}>
                  <Typography variant="subtitle1" children="Type" />
                </Grid>
                <Grid item sm={9}>
                  <TextField source="type" />
                </Grid>
                <Grid item sm={3}>
                  <Typography variant="subtitle1" children="Name" />
                </Grid>
                <Grid item sm={9}>
                  <TextInput
                    source="name"
                    variant="standard"
                    label={false}
                    fullWidth
                    validate={req}
                  />
                </Grid>
                <Grid item sm={3}>
                  <Typography variant="subtitle1" children="File Url" />
                </Grid>
                <Grid item sm={9}>
                  <TextField source="fileUrl" />
                </Grid>
                <Grid item sm={3}>
                  <Typography variant="subtitle1" children="Create Time" />
                </Grid>
                <Grid item sm={9}>
                  <TextField source="created_time" />
                </Grid>
                <Grid item sm={3}>
                  <Typography variant="subtitle1" children="Download Time" />
                </Grid>
                <Grid item sm={9}>
                  <TextField source="download_time" />
                </Grid>
                <Grid item sm={3}>
                  <Typography variant="subtitle1" children="Download Total" />
                </Grid>
                <Grid item sm={9}>
                  <TextField source="download_total" />
                </Grid>
                <Grid item sm={3}>
                  <Typography variant="subtitle1" children="Tags" />
                </Grid>
                <Grid item sm={9}>
                  <ReferenceArrayInput source="tags" reference="tags">
                    <AutocompleteArrayInput
                      fullWidth
                      label={false}
                      source="tags"
                      optionText="name"
                      optionValue="name"
                    />
                  </ReferenceArrayInput>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </FormTab>
      </TabbedForm>
    </Edit>
  )
}

const req = [required()]

export default ProductEdit
