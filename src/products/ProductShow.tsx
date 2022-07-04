import { Grid, Typography } from '@mui/material'
import {
  Show,
  Tab,
  TabbedShowLayout,
  TextField,
  useRecordContext
} from 'react-admin'
import Poster from './Poster'
import SegmentsField from './SegmentsField'

const ProductShow = () => (
  <Show>
    <TabbedShowLayout>
      <Tab label="Detail">
        <Grid container spacing={2}>
          <Grid item md={6}>
            <Poster />
          </Grid>
          <Grid item md={6}>
            <Grid container>
              <Grid item mt={2} md={3}>
                <Typography
                  variant="subtitle2"
                  gutterBottom
                  component="div"
                  children="Name"
                  fontSize={20}
                  mr={2}
                />
              </Grid>
              <Grid item mt={2} md={9}>
                <TextField
                  source="name"
                  variant="overline"
                  label="name"
                  fontSize={20}
                />
              </Grid>
              <Grid item md={3}>
                <Typography
                  variant="subtitle2"
                  gutterBottom
                  component="div"
                  children="Original Name"
                  fontSize={20}
                  mr={2}
                />
              </Grid>
              <Grid item md={9}>
                <TextField source="originalName" fontSize={20} fullWidth />
              </Grid>
              <Grid item md={3}>
                <Typography
                  variant="subtitle2"
                  gutterBottom
                  component="div"
                  children="Size"
                  fontSize={20}
                  mr={2}
                />
              </Grid>
              <Grid item md={9}>
                <TextField source="size" fontSize={20} fullWidth />
              </Grid>
              <Grid item md={3}>
                <Typography
                  variant="subtitle2"
                  gutterBottom
                  component="div"
                  children="Type"
                  fontSize={20}
                  mr={2}
                />
              </Grid>
              <Grid item md={9}>
                <TextField source="type" fontSize={20} fullWidth />
              </Grid>
              <Grid item md={3}>
                <Typography
                  variant="subtitle2"
                  gutterBottom
                  component="div"
                  children="Created Time"
                  fontSize={20}
                  mr={2}
                />
              </Grid>
              <Grid item md={9}>
                <TextField source="created_time" fontSize={20} fullWidth />
              </Grid>
              <Grid item md={3}>
                <Typography
                  variant="subtitle2"
                  gutterBottom
                  component="div"
                  children="Download Time"
                  fontSize={20}
                  mr={2}
                />
              </Grid>
              <Grid item md={9}>
                <TextField source="download_time" fontSize={20} fullWidth />
              </Grid>
              <Grid item md={3}>
                <Typography
                  variant="subtitle2"
                  gutterBottom
                  component="div"
                  children="Download Total"
                  fontSize={20}
                  mr={2}
                />
              </Grid>
              <Grid item md={9}>
                <TextField source="download_total" fontSize={20} fullWidth />
              </Grid>
              <Grid item md={3}>
                <Typography
                  variant="subtitle2"
                  gutterBottom
                  component="div"
                  children="Tags"
                  fontSize={20}
                  mr={2}
                />
              </Grid>
              <Grid item md={9}>
                <SegmentsField />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Tab>
    </TabbedShowLayout>
  </Show>
)

export default ProductShow
