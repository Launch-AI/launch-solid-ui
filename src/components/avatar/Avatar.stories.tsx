import { Avatar, AvatarProps } from './Avatar'

const TypeTemplate: Story<AvatarProps> = (args) => <Avatar {...args}></Avatar>

import imageFile from './static/image.svg'

export const Primary = TypeTemplate.bind({})
Primary.args = {
  avatarType: 'filled',
  shape: 'rounded',
  color: 'primary',
  imageType: 'avatar',
}

export const Secondary = TypeTemplate.bind({})
Secondary.args = {
  avatarType: 'outlined-shadow',
  shape: 'square',
  color: 'secondary',
  imageType: 'letter',
  letters: 'AS',
}

export const Tertiary = TypeTemplate.bind({})
Tertiary.args = {
  avatarType: 'outlined-shadow',
  shape: 'circle',
  color: 'teal',
  imageType: 'image',
  imagePath: imageFile,
}

export default {
  title: 'Avatar',
  component: Avatar,
}
