import { styled } from 'emotion-solid'
import tw from 'twin.macro'

import { AvatarProps, Type, Color } from './Avatar'

export type AvatarStyledProps = {
  type?: Type
  border?: string
  color?: Color
  shape?: AvatarProps['shape']
  shadow?: boolean
  imagePath?: string
  characters?: string
}

const baseStyles = tw`w-20 h-20 flex justify-center items-center border-0 border-solid border-transparent text-white rounded-full text-base shadow-none`

const backgroundStyles = ({ color, type }: AvatarStyledProps) => [
  color === 'default' && tw`bg-light-100`,
  color === 'green' && tw`bg-green-light`,
  color === 'purple' && tw`bg-purple-light`,
  color === 'grey' && tw`bg-grey-light`,
  color === 'teal' && tw`bg-teal-light`,
  type === 'filled' && [
    color === 'primary' && tw`bg-blue`,
    color === 'secondary' && tw`bg-orange`,
  ],
  type === 'outlined' && [
    color === 'primary' && tw`bg-blue-light`,
    color === 'secondary' && tw`bg-orange-light`,
  ],
]

const borderStyles = ({ border, color, type }: AvatarStyledProps) => [
  border !== '0' && tw`border-2`,
  type === 'outlined' && [
    color === 'default' && tw`border-light-100`,
    color === 'green' && tw`border-green`,
    color === 'purple' && tw`border-purple`,
    color === 'grey' && tw`border-grey-dark`,
    color === 'primary' && tw`border-blue`,
    color === 'secondary' && tw`border-orange`,
    color === 'teal' && tw`border-teal`,
  ],
]

const textStyles = ({ color, type }: AvatarStyledProps) => [
  color === 'default' && tw`text-blue`,
  color === 'green' && tw`text-green`,
  color === 'purple' && tw`text-purple`,
  color === 'grey' && tw`text-grey-dark`,
  color === 'teal' && tw`text-teal`,
  type === 'outlined' && [
    color === 'primary' && tw`text-blue`,
    color === 'secondary' && tw`text-orange`,
  ],
  type === 'filled' && [
    color === 'primary' && tw`text-white`,
    color === 'secondary' && tw`text-white`,
  ],
]

const radiusStyles = ({ shape }: AvatarStyledProps) =>
  shape === 'square' && tw`rounded-2xl`

const fontStyles = ({ imagePath, characters }: AvatarStyledProps) =>
  imagePath === '' &&
  characters !== '' &&
  characters !== undefined &&
  tw`text-2xl`

const shadowStyles = ({ shadow }: AvatarStyledProps) => ({
  boxShadow: shadow
    ? '0px 2px 4px rgba(18, 17, 17, 0.04), 0px 8px 16px rgba(113, 112, 112, 0.16)'
    : 'none',
})

const StyledAvatar = styled('div')<AvatarStyledProps>(
  baseStyles,
  backgroundStyles,
  borderStyles,
  textStyles,
  radiusStyles,
  fontStyles,
  shadowStyles
)

export default StyledAvatar
