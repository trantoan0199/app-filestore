import { Create, SimpleForm, TextInput } from 'react-admin'
import { Box } from '@mui/material'

const TagCreate = () => {
  return (
    <Box maxWidth="50em">
      <Create>
        <SimpleForm>
          <TextInput source="name" />
        </SimpleForm>
      </Create>
    </Box>
  )
}

export default TagCreate
