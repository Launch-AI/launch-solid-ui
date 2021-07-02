import AvatarIcon from './AvatarIcon'
import GetColors from './GetColors'
import StyledAvatar from './StyledAvatar'

const getColors = new GetColors()

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

export type AvatarProps = {
  avatarType?: 'filled-shadow' | 'filled' | 'outlined' | 'outlined-shadow'
  shape?: Shape
  color?: Color
  childType?: 'avatar' | 'image' | 'character'
  imagePath?: string
  alt?: string
  characters?: string
}

export type AvatarStyledProps = {
  childType?: AvatarProps['childType']
  backgroundColor?: string
  border?: string
  borderColor?: string
  shape?: AvatarProps['shape']
  imageColor?: string
  shadow?: boolean
}

export const Avatar = (props: AvatarProps) => {
  let backgroundColor = 'primary'
  let border = '0px'
  let borderColor = 'primary'
  let imageColor = 'white'
  let shadow = false

  if (
    props.avatarType == 'outlined-shadow' ||
    props.avatarType == 'filled-shadow'
  ) {
    shadow = true
  }

  if (props.avatarType == 'filled' || props.avatarType == 'filled-shadow') {
    ;[backgroundColor, imageColor, borderColor] = getColors.getFilledColor(
      props.color
    )
  }

  if (props.avatarType == 'outlined' || props.avatarType == 'outlined-shadow') {
    border = '2px'
    ;[backgroundColor, imageColor, borderColor] = getColors.getOutlinedColor(
      props.color
    )
  }

  return (
    <div>
      <StyledAvatar
        childType={props.childType}
        backgroundColor={backgroundColor}
        border={border}
        borderColor={borderColor}
        shape={props.shape}
        imageColor={imageColor}
        shadow={shadow}
      >
        {getImage(
          props.childType,
          props.imagePath,
          props.characters,
          props.alt,
          imageColor
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
