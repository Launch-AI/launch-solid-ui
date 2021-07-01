import { Radio, IRadioProps } from '.'

const RadioTemplate: Story<IRadioProps> = (args) => <Radio {...args} />

export const Normal = RadioTemplate.bind({})
Normal.args = {
  label: 'Label',
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
