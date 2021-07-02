import { Radio, RadioProps } from '.'

const RadioTemplate: Story<RadioProps> = (args) => <Radio {...args} />

export const Normal = RadioTemplate.bind({})
Normal.args = {
  label: 'Label',
  checked: false,
  disabled: false,
  labelPosition: 'left',
}

export const Checked = RadioTemplate.bind({})
Checked.args = {
  checked: true,
}

export const LabelRight = RadioTemplate.bind({})
LabelRight.args = {
  label: 'Label Right',
  labelPosition: 'right',
}

export const Disabled = RadioTemplate.bind({})
Disabled.args = {
  disabled: true,
  label: 'Label',
}

export const DisabledChecked = RadioTemplate.bind({})
DisabledChecked.args = {
  disabled: true,
  checked: true,
  label: 'Label',
}

export default {
  title: 'Radio',
  component: Radio,
  argTypes: {
    labelPosition: {
      options: ['left', 'right'],
      control: { type: 'select' },
    },
  },
}
