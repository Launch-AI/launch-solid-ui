import { RowSelection } from './Table'

export default function getDataKey(
  record: any,
  rowKey?: RowSelection<any>['rowKey']
) {
  let key: string | undefined
  if (typeof rowKey === 'string') {
    key = record[rowKey]
  } else if (typeof rowKey === 'function') {
    key = rowKey(record)
  } else {
    key = record['key']
  }
  if (key == null) {
    console.warn('Row key missing in table')
  }

  return key
}
