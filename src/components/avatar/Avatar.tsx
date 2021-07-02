import type { Component, JSX } from 'solid-js'

import UserIcon from '../../icons/UserIcon'
import withDefaults from '../../utils/with-defaults'
import StyledAvatar from './StyledAvatar'

export type Color =
  | 'grey'
  | 'purple'
  | 'green'
  | 'teal'
  | 'brown'
  | 'primary'
  | 'secondary'
  | undefined

export type Shape = 'rounded' | 'square'

export type Type = 'filled' | 'outlined'

export type AvatarProps = {
  type?: Type
  shape?: Shape
  color?: Color
  shadow?: boolean
  imagePath?: string
  alt?: string
  characters?: string
}

const Avatar: Component<AvatarProps> = (props) => {
  let icon: JSX.Element
  if (props.imagePath) {
    icon = (
      <img width="100%" src={props.imagePath} alt={props.alt || 'Avatar'} />
    )
  } else if (props.characters) {
    icon = props.characters
  } else {
    icon = <UserIcon />
  }

  return (
    <div>
      <StyledAvatar
        type={props.type}
        color={props.color}
        shape={props.shape}
        shadow={props.shadow}
        imagePath={props.imagePath}
        characters={props.characters}
      >
        {icon}
      </StyledAvatar>
    </div>
  )
}

export default withDefaults(Avatar, {
  type: 'filled',
  shape: 'square',
  color: 'primary',
})
