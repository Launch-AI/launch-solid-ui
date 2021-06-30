import { styled } from 'emotion-solid'
import tw from 'twin.macro'

import { TextProps } from './Text'

type StyledTextProps = {} & TextProps

const baseStyles = tw`font-sans text-base`

const typeStyles = ({ type }: StyledTextProps) => [
  type === 'normal' && tw`text-base leading-4.5`,
  type === 'large' && tw`text-lg leading-5`,
  type === 'caption' && tw`text-sm leading-3.5`,
  type === 'overline' && tw`text-xs leading-3`,
]

const weightStyles = ({ weight }: StyledTextProps) => [
  weight === 'light' && tw`font-light`,
  weight === 'normal' && tw`font-normal`,
  weight === 'medium' && tw`font-medium`,
  weight === 'bold' && tw`font-bold`,
]

const StyledText = styled('span')<StyledTextProps>(
  baseStyles,
  typeStyles,
  weightStyles
)

export default StyledText
