import Checbox, { CheckboxProps } from './Checkbox'

const CheckboxTemplate: Story<CheckboxProps> = (args) => (
  <div>
    <Checbox {...args} />
  </div>
)

export const Enabled = CheckboxTemplate.bind({})
Enabled.args = {
  checked: true,
  indeterminate: false,
  disabled: false,
}

export const Indeterminate = CheckboxTemplate.bind({})
Indeterminate.args = {
  checked: true,
  indeterminate: true,
  disabled: false,
}

export const Disabled = CheckboxTemplate.bind({})
Disabled.args = {
  checked: true,
  indeterminate: false,
  disabled: true,
}

export default {
  title: 'Checkbox',
  component: Checbox,
  argTypes: {},
}
