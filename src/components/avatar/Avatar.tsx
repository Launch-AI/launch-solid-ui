import AvatarIcon from './AvatarIcon'
import tw from 'twin.macro'
import { styled } from '../../utils/styled'

export type AvatarProps = {
  avatarType?: 'filled-shadow' | 'filled' | 'outlined' | 'outlined-shadow'
  shape?: 'rounded' | 'square'
  color?:
    | 'gray'
    | 'grey'
    | 'light'
    | 'purple'
    | 'green'
    | 'turquoise'
    | 'blue-green'
    | 'teal'
    | 'brown'
    | 'primary'
    | 'blue'
    | 'secondary'
    | 'orange'
    | 'yellow'
  childType?: 'avatar' | 'image' | 'character'
  imagePath?: string
  characters?: string
}

export const Avatar = (props: AvatarProps) => {
  let backgroundColor = '#0099FF'
  let border = '0px'
  let borderColor = '#0099FF'
  let imageColor = 'white'
  let shadow = false

  if (
    props.avatarType == 'outlined-shadow' ||
    props.avatarType == 'filled-shadow'
  ) {
    shadow = true
  }

  if (props.avatarType == 'filled' || props.avatarType == 'filled-shadow') {
    ;[backgroundColor, imageColor, borderColor] = getFilledColor(props)
  }

  if (props.avatarType == 'outlined' || props.avatarType == 'outlined-shadow') {
    border = '2px'
    ;[backgroundColor, imageColor, borderColor] = getOutlinedColor(props)
  }

  return (
    <div>
      <StyledDiv
        childType={props.childType}
        backgroundColor={backgroundColor}
        border={border}
        borderColor={borderColor}
        shape={props.shape}
        imageColor={imageColor}
        shadow={shadow}
      >
        {getImage(props, imageColor)}
      </StyledDiv>
    </div>
  )
}

const StyledDiv = styled('div')(
  ({
    childType,
    backgroundColor,
    border,
    borderColor,
    shape,
    imageColor,
    shadow,
  }: any) => [
    // Base styles
    tw`w-20 h-20 flex justify-center items-center text-base border-solid rounded-full shadow-none`,
    `
      background-color: ${backgroundColor};
      border-width: ${border};
      border-color: ${borderColor};
      color: ${imageColor};
    `,

    shape === 'square' && `border-radius: 20px;`,

    childType === 'character' && tw`text-2xl`,

    shadow === true &&
      `box-shadow: 0px 2px 4px rgba(18, 17, 17, 0.04), 0px 8px 16px rgba(113, 112, 112, 0.16);`,
  ]
)

function getImage(props: any, imageColor: string) {
  let icon = <AvatarIcon color={imageColor} />
  if (props.childType == 'image') {
    icon = <img width="100%" src={props.imagePath} alt="Image" />
  }
  if (props.childType == 'character') {
    icon = props.characters
  }

  return icon
}

function getOutlinedColor(props: any) {
  let backgroundColor = '#E5F5FF'
  let borderColor = '#0099FF'
  let imageColor = '0099FF'

  if (props.color !== undefined) {
    switch (props.color) {
      case 'gray':
      case 'light':
      case 'grey':
        backgroundColor = '#F5F2F2'
        borderColor = '#EBE4E4'
        imageColor = '#0099FF'
        break

      case 'purple':
        backgroundColor = '#EFDBFF'
        borderColor = '#531DAB'
        imageColor = '#531DAB'
        break

      case 'green':
        backgroundColor = '#D9F7BE'
        borderColor = '#389E0D'
        imageColor = '#389E0D'
        break

      case 'turquoise':
      case 'blue-green':
      case 'teal':
        backgroundColor = '#B5F5EC'
        borderColor = '#08979C'
        imageColor = '#08979C'
        break

      case 'brown':
        backgroundColor = '#EBE4E4'
        borderColor = '#B2A1A1'
        imageColor = '#B2A1A1'
        break

      case 'primary':
      case 'blue':
        backgroundColor = '#E5F5FF'
        borderColor = '#0099FF'
        imageColor = '#0099FF'
        break

      case 'secondary':
      case 'yellow':
      case 'orange':
        backgroundColor = '#FFF8ED'
        borderColor = '#F2A71B'
        imageColor = '#F2A71B'
        break

      default:
        backgroundColor = '#E5F5FF'
        borderColor = '#0099FF'
        imageColor = '#0099FF'
        break
    }
  }

  return [backgroundColor, imageColor, borderColor]
}

function getFilledColor(props: any) {
  let backgroundColor = '#0099FF'
  let borderColor = '#0099FF'
  let imageColor = 'white'

  if (props.color !== undefined) {
    switch (props.color) {
      case 'gray':
      case 'light':
      case 'grey':
        backgroundColor = '#F5F2F2'
        imageColor = '#0099FF'
        break

      case 'purple':
        backgroundColor = '#EFDBFF'
        imageColor = '#531DAB'
        break

      case 'green':
        backgroundColor = '#D9F7BE'
        imageColor = '#389E0D'
        break

      case 'turquoise':
      case 'blue-green':
      case 'teal':
        backgroundColor = '#B5F5EC'
        imageColor = '#08979C'
        break

      case 'brown':
        backgroundColor = '#EBE4E4'
        imageColor = '#B2A1A1'
        break

      case 'primary':
      case 'blue':
        backgroundColor = '#0099FF'
        imageColor = 'white'
        break

      case 'secondary':
      case 'yellow':
      case 'orange':
        backgroundColor = '#F2A71B'
        imageColor = 'white'
        break

      default:
        backgroundColor = '#E5F5FF'
        imageColor = '#0099FF'
        break
    }
  }

  return [backgroundColor, imageColor, borderColor]
}
