import Select from './Select'

const SelectTemplate: Story = (args) => <Select {...args} />

export const Default = SelectTemplate.bind({})
Default.args = {
  placeholder: 'Select Category',
  options: [
    { label: 'option 1', value: 1 },
    { label: 'option 2', value: 2 },
    { label: 'option 3', value: 3 },
  ],
}

export const WithLabel = SelectTemplate.bind({})
WithLabel.args = {
  label: 'Select',
  options: [
    { label: 'option 1', value: 1 },
    { label: 'option 2', value: 2 },
    { label: 'option 3', value: 3 },
  ],
}

export const WithFloatingLabel = SelectTemplate.bind({})
WithFloatingLabel.args = {
  label: 'Select',
  options: [
    { label: 'option 1', value: 1 },
    { label: 'option 2', value: 2 },
    { label: 'option 3', value: 3 },
  ],
  labelFloat: true,
}

export default {
  title: 'Select',
  component: Select,
  argTypes: {},
}
