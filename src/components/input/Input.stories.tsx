import Input from './Input'

const InputTemplate: Story = (args) => <Input {...args} />

export const Default = InputTemplate.bind({})
Default.args = {
  placeholder: 'Placeholder',
}

export const Filled = InputTemplate.bind({})
Filled.args = {
  placeholder: 'Placeholder',
  filled: true,
}

export const WithLabel = InputTemplate.bind({})
WithLabel.args = {
  placeholder: 'Placeholder',
  label: 'Label',
}

export const WithFloatLabel = InputTemplate.bind({})
WithFloatLabel.args = {
  label: 'Label',
  labelFloat: true,
}

export default {
  title: 'Input',
  component: Input,
  argTypes: {},
}
