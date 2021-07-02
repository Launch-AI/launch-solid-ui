import { Avatar, AvatarProps } from './Avatar'
// @ts-ignore
import imageFile from './static/image.svg'

const TypeTemplate: Story<AvatarProps> = (args) => <Avatar {...args}></Avatar>

export const Primary = TypeTemplate.bind({})
Primary.args = {
  avatarType: 'filled',
  shape: 'rounded',
  color: 'purple',
  childType: 'avatar',
}

export const Secondary = TypeTemplate.bind({})
Secondary.args = {
  avatarType: 'outlined-shadow',
  shape: 'square',
  color: 'secondary',
  childType: 'character',
  characters: 'AS',
}

export const Tertiary = TypeTemplate.bind({})
Tertiary.args = {
  avatarType: 'outlined-shadow',
  shape: 'rounded',
  color: 'green',
  childType: 'image',
  imagePath: imageFile,
  alt: 'Avatar',
}

export default {
  title: 'Avatar',
  component: Avatar,
  argTypes: {
    avatarType: {
      options: ['filled', 'filled-shadow', 'outlined', 'outlined-shadow'],
      control: { type: 'select' },
    },
    shape: {
      options: ['rounded', 'square'],
      control: { type: 'select' },
    },
    color: {
      options: [
        'primary',
        'secondary',
        'green',
        'teal',
        'brown',
        'grey',
        'purple',
      ],
      control: { type: 'select' },
    },
    childType: {
      options: ['avatar', 'image', 'character'],
      control: { type: 'select' },
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
