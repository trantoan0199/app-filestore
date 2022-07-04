import { Admin, Resource } from 'react-admin'
import './App.css'
import Dashboard from './Dashboard'
import jsonServerProvider from 'ra-data-json-server'
import products from './products'
import tags from './tags'
import { Layout } from './Layout'

export const API = 'http://192.168.2.16:7979/'

// const dataProvider = jsonServerProvider('http://localhost:7979')
const dataProvider = jsonServerProvider(`${API}api`)

function App() {
  return (
    <Admin dashboard={Dashboard} layout={Layout} dataProvider={dataProvider}>
      <Resource name="files" {...products} />
      {/* <Resource name="tags" {...tags} /> */}
    </Admin>
  )
}

export default App
