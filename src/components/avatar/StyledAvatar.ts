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
  color === 'grey' && tw`bg-grey-light`,
  color === 'green' && tw`bg-green-light`,
  color === 'purple' && tw`bg-purple-light`,
  color === 'brown' && tw`bg-brown-light`,
  color === 'teal' && tw`bg-teal-light`,
  type === 'filled' && [
    color === 'primary' && tw`bg-primary`,
    color === 'secondary' && tw`bg-secondary`,
  ],
  type === 'outlined' && [
    color === 'primary' && tw`bg-primary-light`,
    color === 'secondary' && tw`bg-secondary-light`,
  ],
]

const borderStyles = ({ border, color, type }: AvatarStyledProps) => [
  border !== '0' && tw`border-2`,
  type === 'outlined' && [
    color === 'grey' && tw`border-grey`,
    color === 'green' && tw`border-green`,
    color === 'purple' && tw`border-purple`,
    color === 'brown' && tw`border-brown`,
    color === 'primary' && tw`border-primary`,
    color === 'secondary' && tw`border-secondary`,
    color === 'teal' && tw`border-teal`,
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
  radiusStyles,
  fontStyles,
  shadowStyles
)

export default StyledAvatar
