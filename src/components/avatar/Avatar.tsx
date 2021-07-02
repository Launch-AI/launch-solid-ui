import AvatarIcon from './AvatarIcon'
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
  childType?: 'avatar' | 'image' | 'character'
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
        {getImage(
          props.imagePath,
          props.characters,
          props.alt,
          getImageColor(props.color)
        )}
      </StyledAvatar>
    </div>
  )
}

function getImage(
  imagePath: AvatarProps['imagePath'],
  characters: AvatarProps['characters'],
  alt: AvatarProps['alt'],
  imageColor: string
) {
  let icon = <AvatarIcon color={imageColor} />
  if (imagePath !== '' && imagePath !== undefined) {
    icon = <img width="100%" src={imagePath} alt={alt || 'Avatar'} />
  } else if (characters !== '' && characters !== undefined) {
    icon = characters
  }

  return icon
}

function getImageColor(color: Color) {
  let imageColor = 'white'
  switch (color) {
    case 'grey':
      imageColor = '#0099FF'
      break

    case 'purple':
      imageColor = '#531DAB'
      break

    case 'green':
      imageColor = '#389E0D'
      break

    case 'teal':
      imageColor = '#08979C'
      break

    case 'brown':
      imageColor = '#B2A1A1'
      break

    case 'primary':
      imageColor = 'white'
      break

    case 'secondary':
      imageColor = 'white'
      break

    default:
      imageColor = '#0099FF'
      break
  }

  return imageColor
}
