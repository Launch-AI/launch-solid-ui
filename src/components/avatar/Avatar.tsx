import UserIcon from '../../icons/UserIcon'
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

export const Avatar = (props: AvatarProps) => {
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
        {getImage(props.imagePath, props.characters, props.alt)}
      </StyledAvatar>
    </div>
  )
}

function getImage(
  imagePath: AvatarProps['imagePath'],
  characters: AvatarProps['characters'],
  alt: AvatarProps['alt']
) {
  let icon = <UserIcon />
  if (imagePath !== '' && imagePath !== undefined) {
    icon = <img width="100%" src={imagePath} alt={alt || 'Avatar'} />
  } else if (characters !== '' && characters !== undefined) {
    icon = characters
  }

  return icon
}
