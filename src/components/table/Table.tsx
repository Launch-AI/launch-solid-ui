import { createEffect, For, JSX, Show } from 'solid-js'
import { createStore } from 'solid-js/store'

import { Checkbox } from '../checkbox'
import { Skeleton } from '../skeleton'
import { Sorter } from '../sorter'
import StyledLoadingContainer from './StyledLoadingContainer'
import StyledTable from './StyledTable'
import StyledTableData from './StyledTableData'
import StyledTableHead, { StyledTableHeadInner } from './StyledTableHead'
import StyledTableRow from './StyledTableRow'
import getDataKey from './getDataKey'

export type RowSelection<Record> = {
  type?: 'checkbox' // | 'radio'
  rowKey?: string | ((record: Record) => string)
  selectedRows?: string[]
  onChange?: (selectedRowKeys: string[], selectedRows: Record[]) => void
}

export type Column<Record> = {
  title?: string
  dataIndex?: string
  key?: string
  sorter?: (a: Record, b: Record) => number
  render?: (data: any, record: Record) => JSX.Element
}

export type TableProps<Record> = {
  block?: boolean
  columns: Column<Record>[]
  data: Record[]
  rowSelection?: RowSelection<Record>
  loading?: boolean
}

function Table<Record>(props: TableProps<Record>) {
  const [rows, setRows] = createStore({
    selected: new Set(props.rowSelection?.selectedRows || []),
    sorted: props.data,
    sortCol: undefined as string | undefined,
    sortDir: undefined as 'asc' | 'desc' | undefined,
  })

  createEffect(() => {
    if (props.rowSelection?.selectedRows != null) {
      setRows({ selected: new Set(props.rowSelection.selectedRows) })
    }
  })

  createEffect(() => {
    if (rows.sortCol && rows.sortDir) {
      const sortedRows = [...props.data].sort(
        props.columns.find(({ key }) => key === rows.sortCol)?.sorter
      )
      if (rows.sortDir === 'desc') {
        sortedRows.reverse()
      }

      setRows({
        sorted: sortedRows,
      })
    }
  })

  const handleSelectedRowsChange = () => {
    if (props.rowSelection?.onChange) {
      props.rowSelection.onChange(
        Array.from(rows.selected),
        props.data.filter((record) => {
          const key = getDataKey(record, props.rowSelection?.rowKey)
          return key && rows.selected.has(key)
        })
      )
    }
  }

  const selectAll = () => {
    setRows({
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
    setRows({
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
              checked={rows.selected.size > 0}
              indeterminate={rows.selected.size < props.data.length}
              onChange={() => {
                if (rows.selected.size < props.data.length) {
                  selectAll()
                } else if (rows.selected.size >= props.data.length) {
                  selectNone()
                }
              }}
            />
          </StyledTableHead>
        )}
        <For each={props.columns}>
          {(column) => {
            const handleSortChange = (dir?: 'asc' | 'desc') => {
              if (dir != null || rows.sortCol == null) {
                setRows({ sortCol: dir ? column.key : undefined, sortDir: dir })
              } else if (dir == null && rows.sortCol == column.key) {
                setRows({
                  sorted: [...props.data],
                })
              }
            }

            return (
              <StyledTableHead>
                <StyledTableHeadInner>
                  <span>{column.title || ''}</span>
                  <Show when={column.sorter && column.key}>
                    <Sorter
                      dir={
                        rows.sortCol === column.key ? rows.sortDir : undefined
                      }
                      onChange={handleSortChange}
                    />
                  </Show>
                </StyledTableHeadInner>
              </StyledTableHead>
            )
          }}
        </For>
      </StyledTableRow>
    </thead>
  )

  const tableBody = (
    <tbody>
      <For each={rows.sorted}>
        {(record: any) => {
          const key = getDataKey(record, props.rowSelection?.rowKey)

          return (
            <StyledTableRow hoverable>
              {props.rowSelection?.type === 'checkbox' && (
                <StyledTableData bordered={false} width={16}>
                  <Checkbox
                    block
                    checked={(key && rows.selected.has(key)) || false}
                    onChange={(newChecked) => {
                      if (key) {
                        setRows('selected', (selectedRows) => {
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
    <>
      <StyledTable {...props}>
        {tableHead}
        <Show when={props.loading} fallback={tableBody}>
          <tbody>
            <For each={new Array(3)}>
              {() => (
                <StyledTableRow>
                  <StyledTableData
                    colSpan={
                      props.columns.length +
                      (props.rowSelection?.type === 'checkbox' ? 1 : 0)
                    }
                  >
                    <StyledLoadingContainer>
                      <Skeleton rows={1} />
                    </StyledLoadingContainer>
                  </StyledTableData>
                </StyledTableRow>
              )}
            </For>
          </tbody>
        </Show>
      </StyledTable>
    </>
  )
}

export default Table
