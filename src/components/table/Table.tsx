import { createEffect, For, JSX } from 'solid-js'
import { $RAW, createStore } from 'solid-js/store'

import Checkbox from '../checkbox/Checkbox'
import StyledTable from './StyledTable'
import StyledTableData from './StyledTableData'
import StyledTableHead from './StyledTableHead'
import StyledTableRow from './StyledTableRow'

type RowSelection<Record> = {
  type?: 'checkbox' // | 'radio'
  rowKey?: string | ((record: Record) => string)
  selectedRows?: string[]
  onChange?: (selectedRowKeys: string[], selectedRows: Record[]) => void
}

type Column<Record> = {
  title?: string
  dataIndex?: string
  key?: string
  render?: (data: any, record: Record) => JSX.Element
}

function getDataKey(record: any, rowKey?: RowSelection<any>['rowKey']) {
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

export type TableProps<Record> = {
  block?: boolean
  columns: Column<Record>[]
  data: Record[]
  rowSelection?: RowSelection<Record>
}

function Table<Record>(props: TableProps<Record>) {
  const [selectedRows, setSelectedRows] = createStore({
    selected: new Set(props.rowSelection?.selectedRows || []),
  })

  createEffect(() => {
    if (props.rowSelection?.selectedRows != null) {
      setSelectedRows({ selected: new Set(props.rowSelection.selectedRows) })
    }
  })

  const handleSelectedRowsChange = () => {
    if (props.rowSelection?.onChange) {
      props.rowSelection.onChange(
        Array.from(selectedRows.selected),
        props.data.filter((record) => {
          const key = getDataKey(record, props.rowSelection?.rowKey)
          return key && selectedRows.selected.has(key)
        })
      )
    }
  }

  const selectAll = () => {
    setSelectedRows({
      selected: new Set(
        props.data
          .map(
            (record) => getDataKey(record, props.rowSelection?.rowKey) as string
          )
          .filter(Boolean)
      ),
    })
  }

  const selectNone = () => {
    setSelectedRows({
      selected: new Set(),
    })
  }

  const tableHead = (
    <thead>
      <StyledTableRow>
        {props.rowSelection?.type === 'checkbox' && (
          <StyledTableHead bordered={false} width={16}>
            <Checkbox
              block
              checked={selectedRows.selected.size > 0}
              indeterminate={selectedRows.selected.size < props.data.length}
              onChange={() => {
                if (selectedRows.selected.size < props.data.length) {
                  selectAll()
                } else if (selectedRows.selected.size >= props.data.length) {
                  selectNone()
                }
              }}
            />
          </StyledTableHead>
        )}
        <For each={props.columns}>
          {(column) => <StyledTableHead>{column.title || ''}</StyledTableHead>}
        </For>
      </StyledTableRow>
    </thead>
  )

  const tableBody = (
    <tbody>
      <For each={props.data}>
        {(record: any) => {
          const key = getDataKey(record, props.rowSelection?.rowKey)

          return (
            <StyledTableRow>
              {props.rowSelection?.type === 'checkbox' && (
                <StyledTableData bordered={false} width={16}>
                  <Checkbox
                    block
                    checked={(key && selectedRows.selected.has(key)) || false}
                    onChange={(newChecked) => {
                      if (key) {
                        setSelectedRows('selected', (selectedRows) => {
                          // @ts-ignore
                          const newRows = new Set(selectedRows)

                          if (newChecked) {
                            // @ts-ignore Solid has a bug where selectedRows is readonly
                            newRows.add(key)
                          } else {
                            // @ts-ignore Solid has a bug where selectedRows is readonly
                            newRows.delete(key)
                          }

                          return newRows
                        })
                        handleSelectedRowsChange()
                      }
                    }}
                  />
                </StyledTableData>
              )}
              <For each={props.columns}>
                {(column) => (
                  <StyledTableData>
                    {column.render
                      ? column.render(
                          column.dataIndex
                            ? (record as any)[column.dataIndex]
                            : undefined,
                          record
                        )
                      : column.dataIndex
                      ? (record as any)[column.dataIndex]
                      : undefined}
                  </StyledTableData>
                )}
              </For>
            </StyledTableRow>
          )
        }}
      </For>
    </tbody>
  )

  return (
    <StyledTable {...props}>
      {tableHead}
      {tableBody}
    </StyledTable>
  )
}

export default Table
