import { styled } from 'emotion-solid'
import tw from 'twin.macro'

import type { ButtonProps } from './Button'

type StyledIconProps = {
  position?: ButtonProps['iconPosition']
  size?: ButtonProps['size']
}

const baseStyles = tw`flex justify-center items-center`

const positionStyles = ({ position }: StyledIconProps) => [
  position === 'before' && tw`pr-2.5`,
  position === 'after' && tw`pl-2.5`,
]

const sizeStyles = ({ size }: StyledIconProps) => [
  size === 'small' && { svg: tw`w-3 h-3` },
  size === 'medium' && { svg: tw`w-3 h-3` },
  size === 'large' && { svg: tw`w-3.5 h-3.5` },
  size === 'extra-large' && { svg: tw`w-4 h-4` },
]

const StyledIcon = styled('span')<StyledIconProps>([
  baseStyles,
  positionStyles,
  sizeStyles,
])

export default StyledIcon
