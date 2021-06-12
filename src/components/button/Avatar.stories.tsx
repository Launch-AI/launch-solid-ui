import { Avatar } from './Avatar'

const TypeTemplate: Story<any> = (args) => <Avatar {...args}></Avatar>

export const Primary = TypeTemplate.bind({})
Primary.args = {
  type: 'primary',
  avatar_type: 'filled',
  shape: 'rounded',
  color: 'primary',
  image_type: 'avatar',
}

export const Secondary = TypeTemplate.bind({})
Primary.args = {
  type: 'primary',
  avatar_type: 'outlined-shadow',
  shape: 'square',
  color: 'teal',
  image_type: 'letter',
  letters: 'AS',
}

export const Tertiary = TypeTemplate.bind({})
Primary.args = {
  type: 'primary',
  avatar_type: 'outlined-shadow',
  shape: 'square',
  color: 'teal',
  image_type: 'image',
  image_path: 'some image path',
}

export default {
  title: 'Avatar',
  component: Avatar,
  argTypes: {
    type: {
      options: ['primary', 'secondary'],
      control: { type: 'select' },
    },
  },
}
