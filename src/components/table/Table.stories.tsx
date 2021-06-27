import Table, { TableProps } from './Table'

const dummyData = [
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

const TableTemplate: Story<TableProps<{}>> = (args) => <Table {...args} />

export const Normal = TableTemplate.bind({})
Normal.args = {
  block: true,
  columns: [
    {
      title: 'Name',
      key: 'name',
      dataIndex: 'name',
      render: (data) => {
        return `Hey ${data}`
      },
    },
    {
      title: 'Age',
      key: 'age',
      dataIndex: 'age',
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
