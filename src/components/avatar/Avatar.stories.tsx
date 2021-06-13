import { Avatar, AvatarProps } from './Avatar'

const TypeTemplate: Story<AvatarProps> = (args) => <Avatar {...args}></Avatar>

import imageFile from './static/image.svg'

export const Primary = TypeTemplate.bind({})
Primary.args = {
  avatarType: 'filled',
  shape: 'rounded',
  color: 'primary',
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
  color: 'primary',
  childType: 'image',
  imagePath: imageFile,
}

export default {
  title: 'Avatar',
  component: Avatar,
}
