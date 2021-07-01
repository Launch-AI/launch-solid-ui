import { Avatar, AvatarProps } from './Avatar'
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
}
