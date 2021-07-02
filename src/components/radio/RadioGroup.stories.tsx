import { RadioGroup, RadioGroupProps } from '.'

const RadioGroupTemplate: Story<RadioGroupProps> = (args) => (
  <RadioGroup {...args} />
)

export const Normal = RadioGroupTemplate.bind({})
Normal.args = {
  value: '1',
  options: [
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '3' },
  ],
}

export const Inline = RadioGroupTemplate.bind({})
Inline.args = {
  inline: true,
  value: '1',
  options: [
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '3' },
  ],
}

export const Disabled = RadioGroupTemplate.bind({})
Disabled.args = {
  disabled: true,
  value: '1',
  options: [
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '3' },
  ],
}

export default {
  title: 'RadioGroup',
  component: RadioGroup,
  argTypes: {
    labelPosition: {
      options: ['left', 'right'],
      control: { type: 'select' },
    },
  },
}
