import AddIcon from '../../icons/AddIcon'
import Button, { ButtonProps } from './Button'

const ButtonTemplate: Story<ButtonProps> = (args) => (
  <div>
    <Button {...args} />
  </div>
)

export const Primary = ButtonTemplate.bind({})
Primary.args = {
  variant: 'primary',
  type: 'filled',
  size: 'medium',
  icon: null,
  iconPosition: 'before',
  shape: 'rounded',
  disabled: false,
  children: 'Button',
}

export const Secondary = ButtonTemplate.bind({})
Secondary.args = {
  variant: 'secondary',
  type: 'filled',
  size: 'medium',
  icon: null,
  iconPosition: 'before',
  shape: 'rounded',
  disabled: false,
  children: 'Button',
}

export const Small = ButtonTemplate.bind({})
Small.args = {
  variant: 'primary',
  type: 'filled',
  size: 'small',
  icon: null,
  iconPosition: 'before',
  shape: 'rounded',
  disabled: false,
  children: 'Button',
}

export const Large = ButtonTemplate.bind({})
Large.args = {
  variant: 'primary',
  type: 'filled',
  size: 'large',
  icon: null,
  iconPosition: 'before',
  shape: 'rounded',
  disabled: false,
  children: 'Button',
}

export const Outlined = ButtonTemplate.bind({})
Outlined.args = {
  variant: 'primary',
  type: 'outlined',
  size: 'medium',
  icon: null,
  iconPosition: 'before',
  shape: 'rounded',
  disabled: false,
  children: 'Button',
}

export const Text = ButtonTemplate.bind({})
Text.args = {
  variant: 'primary',
  type: 'text',
  size: 'medium',
  icon: null,
  iconPosition: 'before',
  shape: 'rounded',
  disabled: false,
  children: 'Button',
}

export const WithIcon = ButtonTemplate.bind({})
WithIcon.args = {
  variant: 'primary',
  type: 'filled',
  size: 'medium',
  icon: <AddIcon />,
  iconPosition: 'before',
  shape: 'rounded',
  disabled: false,
  children: 'Button',
}

export const Disabled = ButtonTemplate.bind({})
Disabled.args = {
  variant: 'primary',
  type: 'filled',
  size: 'medium',
  icon: null,
  iconPosition: 'before',
  shape: 'rounded',
  disabled: true,
  children: 'Button',
}

export const Icon = ButtonTemplate.bind({})
Icon.args = {
  variant: 'primary',
  type: 'filled',
  size: 'medium',
  icon: <AddIcon />,
  iconPosition: 'before',
  shape: 'rounded',
  disabled: false,
  children: null,
}

export const IconCircle = ButtonTemplate.bind({})
IconCircle.args = {
  variant: 'primary',
  type: 'filled',
  size: 'medium',
  icon: <AddIcon />,
  iconPosition: 'before',
  shape: 'circle',
  disabled: false,
  children: null,
}

export const IconCircleOutlined = ButtonTemplate.bind({})
IconCircleOutlined.args = {
  variant: 'primary',
  type: 'outlined',
  size: 'medium',
  icon: <AddIcon />,
  iconPosition: 'before',
  shape: 'circle',
  disabled: false,
  children: null,
}

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'ghost'],
      control: { type: 'select' },
    },
    type: {
      options: ['filled', 'outlined', 'text'],
      control: { type: 'select' },
    },
    size: {
      options: ['small', 'medium', 'large', 'extra-large'],
      control: { type: 'select' },
    },
    icon: { control: { type: null } },
    iconPosition: {
      options: ['before', 'after'],
      control: { type: 'select' },
    },
    shape: {
      options: ['rounded', 'circle'],
      control: { type: 'select' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
}
