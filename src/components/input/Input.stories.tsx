import Input from './Input'

const InputTemplate: Story = (args) => <Input {...args} />

export const Default = InputTemplate.bind({})
Default.args = {
  placeholder: 'Placeholder',
  block: false,
}

export const Filled = InputTemplate.bind({})
Filled.args = {
  placeholder: 'Placeholder',
  filled: true,
  block: false,
}

export const WithLabel = InputTemplate.bind({})
WithLabel.args = {
  placeholder: 'Placeholder',
  label: 'Label',
  block: false,
}

export const WithFloatLabel = InputTemplate.bind({})
WithFloatLabel.args = {
  label: 'Label',
  labelFloat: true,
  block: false,
}

export const Block = InputTemplate.bind({})
Block.args = {
  label: 'Label',
  labelFloat: true,
  block: true,
}

export default {
  title: 'Input',
  component: Input,
  argTypes: {},
}
