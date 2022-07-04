import { RaRecord } from 'react-admin'

export interface Product extends RaRecord {
  id: string | number
  fileId: string
  name: string
  originalName: string
  path: string
  size: string
  status: string
  type: string
  fileUrl: string
  date: string
  categori_id: string | number
  created_time: string
  download_time: string
  downloadTotal: number
  tags: string[]
  action: 0 | 1 | 2
}

export interface Tag extends RaRecord {
  id: string | number
  name: string
}
