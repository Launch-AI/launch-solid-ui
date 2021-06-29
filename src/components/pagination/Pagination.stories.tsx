import Pagination, { PaginationProps } from './Pagination'

const PaginationTemplate: Story<PaginationProps> = (args) => (
  <Pagination {...args} />
)

export const Normal = PaginationTemplate.bind({})
Normal.args = {
  pages: 5,
}

export default {
  title: 'Pagination',
  component: Pagination,
  argTypes: {},
}
