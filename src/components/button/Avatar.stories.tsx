import { Avatar, AvatarProps } from './Avatar'

const TypeTemplate: Story<AvatarProps> = (args) => <Avatar {...args}></Avatar>

export const Primary = TypeTemplate.bind({})
Primary.args = {
  avatar_type: 'filled',
  shape: 'rounded',
  color: 'primary',
  image_type: 'avatar',
}

export const Secondary = TypeTemplate.bind({})
Secondary.args = {
  avatar_type: 'outlined-shadow',
  shape: 'square',
  color: 'teal',
  image_type: 'letter',
  letters: 'AS',
}

export const Tertiary = TypeTemplate.bind({})
Tertiary.args = {
  avatar_type: 'filled-shadow',
  shape: 'square',
  color: 'purple',
  image_type: 'letter',
  letters: 'S',
}

export default {
  title: 'Avatar',
  component: Avatar,
  argTypes: {
    type: {
      options: ['primary', 'secondary', 'tertiary'],
      control: { type: 'select' },
    },
  },
}
