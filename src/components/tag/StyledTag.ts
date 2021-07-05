import { styled } from 'emotion-solid'
import type { JSX } from 'solid-js'
import tw from 'twin.macro'

import { TagProps } from '.'

type StyledTagProps = TagProps & JSX.IntrinsicElements['div']

const baseStyles = tw`relative inline-flex items-center h-8 font-sans font-medium text-base rounded-2xl px-3 select-none transform duration-200 ease-out outline-none active:scale-95`

const backgroundStyles = ({ color }: StyledTagProps) => [
  color === 'default' &&
    tw`text-dark-400 bg-light-300 hover:bg-light-100 active:bg-light-100`,
  color === 'primary' &&
    tw`text-white bg-primary hover:bg-primary-light active:bg-primary-dark`,
  color === 'secondary' &&
    tw`text-white bg-secondary hover:bg-secondary-light active:bg-secondary-dark`,
  color === 'green' &&
    tw`text-white bg-green hover:bg-green-light active:bg-green-dark`,
  color === 'grey' &&
    tw`text-white bg-grey hover:bg-grey-light active:bg-grey-dark`,
  color === 'teal' &&
    tw`text-white bg-teal hover:bg-teal-light active:bg-teal-dark`,
  color === 'purple' &&
    tw`text-white bg-purple hover:bg-purple-light active:bg-purple-dark`,
]

const disabledStyles = ({ disabled }: StyledTagProps) => [
  disabled &&
    tw`cursor-not-allowed bg-light-300 text-dark-400 active:scale-100`,
]

const smallStyles = ({ size }: StyledTagProps) =>
  size === 'small' && tw`text-xs h-6 px-5`

const StyledTag = styled('div')<StyledTagProps>(
  baseStyles,
  disabledStyles,
  backgroundStyles,
  smallStyles
)

export default StyledTag
