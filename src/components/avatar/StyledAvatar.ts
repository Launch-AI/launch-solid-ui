import { styled } from 'emotion-solid'
import tw from 'twin.macro'

import { AvatarStyledProps } from './Avatar'

const baseStyles = tw`w-20 h-20 flex justify-center items-center border-0 border-solid border-transparent text-white rounded-full text-base shadow-none`

const backgroundStyles = ({ backgroundColor }: AvatarStyledProps) => ({
  backgroundColor: backgroundColor,
})

const borderStyles = ({ border, borderColor }: AvatarStyledProps) => ({
  borderWidth: border,
  borderColor: borderColor,
})

const imageStyles = ({ imageColor }: AvatarStyledProps) => ({
  color: imageColor,
})

const radiusStyles = ({ shape }: AvatarStyledProps) =>
  shape === 'square' && tw`rounded-2xl`

const fontStyles = ({ childType }: AvatarStyledProps) =>
  childType === 'character' && tw`text-2xl`

const shadowStyles = ({ shadow }: AvatarStyledProps) => ({
  boxShadow: shadow
    ? '0px 2px 4px rgba(18, 17, 17, 0.04), 0px 8px 16px rgba(113, 112, 112, 0.16)'
    : 'none',
})

const StyledAvatar = styled('div')<AvatarStyledProps>(
  baseStyles,
  backgroundStyles,
  borderStyles,
  imageStyles,
  radiusStyles,
  fontStyles,
  shadowStyles
)

export default StyledAvatar
