import Table, { TableProps } from './Table'

interface DataItem {
  key: string
  name: string
  age: number
  origin: string
}

const dummyData: DataItem[] = [
  {
    key: 'first',
    name: 'Ari Seyhun',
    age: 21,
    origin: 'Australia',
  },
  {
    key: 'second',
    name: 'Vish V',
    age: 27,
    origin: 'Vancouver',
  },
]

const TableTemplate: Story<TableProps<DataItem>> = (args) => <Table {...args} />

export const Normal = TableTemplate.bind({})
Normal.args = {
  block: true,
  columns: [
    {
      title: 'Name',
      key: 'name',
      dataIndex: 'name',
      sorter: (a, b) => {
        const nameA = a.name.toUpperCase()
        const nameB = b.name.toUpperCase()

        if (nameA < nameB) {
          return -1
        }
        if (nameA > nameB) {
          return 1
        }

        // names must be equal
        return 0
      },
      render: (data) => {
        return `Hey ${data}`
      },
    },
    {
      title: 'Age',
      key: 'age',
      dataIndex: 'age',
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: 'Origin',
      key: 'origin',
      dataIndex: 'origin',
    },
  ],
  data: dummyData,
  rowSelection: {
    type: 'checkbox',
    rowKey: 'key',
    onChange: (a, b) => console.log(a, b),
  },
}

export default {
  title: 'Table',
  component: Table,
  argTypes: {},
}
