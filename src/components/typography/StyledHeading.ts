import { styled } from 'emotion-solid'
import tw from 'twin.macro'

import { HeadingProps } from './Heading'

type StyledHeadingProps = {} & HeadingProps

const baseStyles = tw`font-sans m-0`

const levelStyles = ({ level }: StyledHeadingProps) => [
  level == 1 && tw`text-heading-1 tracking-heading-1`,
  level == 2 && tw`text-heading-2 tracking-heading-2`,
  level == 3 && tw`text-heading-3 tracking-heading-3`,
  level == 4 && tw`text-heading-4 tracking-heading-4`,
  level == 5 && tw`text-heading-5 tracking-heading-5`,
  level == 6 && tw`text-heading-6 tracking-heading-6`,
]

const weightStyles = ({ weight }: StyledHeadingProps) => [
  weight === 'light' && tw`font-light`,
  weight === 'normal' && tw`font-normal`,
  weight === 'medium' && tw`font-medium`,
  weight === 'bold' && tw`font-bold`,
]

const StyledHeading = styled('h1')<StyledHeadingProps>(
  baseStyles,
  levelStyles,
  weightStyles
)

export default StyledHeading
