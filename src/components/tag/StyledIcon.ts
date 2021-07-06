import { styled } from 'emotion-solid'
import type { JSX } from 'solid-js'
import tw from 'twin.macro'

import type { TagProps } from '.'

type Position = {
  position?: 'before' | 'after'
}

type StyledIconProps = TagProps & Position & JSX.IntrinsicElements['span']

const baseStyles = tw`flex justify-center items-center cursor-pointer`

const positionStyles = ({ position }: StyledIconProps) => [
  position === 'before' && tw`mr-2.5`,
  position === 'after' && tw`ml-2.5`,
]

const sizeStyles = ({ size }: StyledIconProps) => [
  { svg: tw`w-3.5 h-3.5` },
  size === 'small' && { svg: tw`w-3 h-3` },
]

const StyledIcon = styled('span')<StyledIconProps>([
  baseStyles,
  positionStyles,
  sizeStyles,
])

export default StyledIcon
