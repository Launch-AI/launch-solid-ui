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
  shadow?: boolean
  shape?: Shape
  color?: Color
  childType?: 'avatar' | 'image' | 'character'
  imagePath?: string
  alt?: string
  characters?: string
}

export const Avatar = (props: AvatarProps) => {
  return (
    <div>
      <StyledAvatar
        childType={props.childType}
        type={props.type}
        color={props.color}
        shape={props.shape}
        shadow={props.shadow}
      >
        {getImage(
          props.childType,
          props.imagePath,
          props.characters,
          props.alt,
          getImageColor(props.color, props.type as Type)
        )}
      </StyledAvatar>
    </div>
  )
}

function getImage(
  childType: AvatarProps['childType'],
  imagePath: AvatarProps['imagePath'],
  characters: AvatarProps['characters'],
  alt: AvatarProps['alt'],
  imageColor: string
) {
  let icon = <AvatarIcon color={imageColor} />
  if (childType == 'image') {
    icon = <img width="100%" src={imagePath} alt={alt || 'Avatar'} />
  }
  if (childType == 'character') {
    icon = characters
  }

  return icon
}

function getImageColor(color: Color, type: Type) {
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
