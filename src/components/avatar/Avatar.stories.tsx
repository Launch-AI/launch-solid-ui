import Avatar, { AvatarProps } from './Avatar'
// @ts-ignore
import imageFile from './static/image.svg'

const TypeTemplate: Story<AvatarProps> = (args) => <Avatar {...args}></Avatar>

export const Primary = TypeTemplate.bind({})
Primary.args = {
  type: 'filled',
  shape: 'rounded',
  color: 'purple',
  shadow: false,
}

export const Secondary = TypeTemplate.bind({})
Secondary.args = {
  type: 'outlined',
  shape: 'square',
  color: 'green',
  shadow: true,
  characters: 'AS',
}

export const Tertiary = TypeTemplate.bind({})
Tertiary.args = {
  type: 'outlined',
  shape: 'rounded',
  color: 'primary',
  shadow: true,
  imagePath: imageFile,
  alt: 'Avatar',
}

export default {
  title: 'Avatar',
  component: Avatar,
  argTypes: {
    type: {
      options: ['filled', 'outlined'],
      control: { type: 'select' },
    },
    shape: {
      options: ['rounded', 'square'],
      control: { type: 'select' },
    },
    color: {
      options: [
        'default',
        'primary',
        'secondary',
        'green',
        'teal',
        'grey',
        'purple',
      ],
      control: { type: 'select' },
    },
    shadow: {
      control: { type: 'boolean' },
    },
    imagePath: {
      type: { name: 'string', required: false },
      defaultValue: '',
      control: { type: 'text' },
    },
    alt: {
      type: { name: 'string', required: false },
      defaultValue: '',
      control: { type: 'text' },
    },
    characters: {
      type: { name: 'string', required: false },
      defaultValue: '',
      control: { type: 'text' },
    },
  },
}
