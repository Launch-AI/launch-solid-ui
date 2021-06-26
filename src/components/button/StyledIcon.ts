import tw from 'twin.macro'

import { styled } from '../../utils/styled'
import type { ButtonProps } from './Button'

type StyledIconProps = {
  position?: ButtonProps['iconPosition']
  size?: ButtonProps['size']
}

const baseStyles = tw`flex justify-center items-center`

const positionStyles = ({ position }: StyledIconProps) => [
  position === 'before' && tw`pr-1.5`,
  position === 'after' && tw`pl-1.5`,
]

const sizeStyles = ({ size }: StyledIconProps) => [
  size === 'small' && { svg: tw`w-4 h-4` },
  size === 'medium' && { svg: tw`w-4 h-4` },
  size === 'large' && { svg: tw`w-6 h-6` },
  size === 'extra-large' && { svg: tw`w-6 h-6` },
]

const StyledIcon = styled('span')<StyledIconProps>([
  baseStyles,
  positionStyles,
  sizeStyles,
])

export default StyledIcon
