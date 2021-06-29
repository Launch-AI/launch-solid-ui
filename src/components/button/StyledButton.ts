import tw from 'twin.macro'

import { styled } from '../../utils/styled'
import type { ButtonProps } from './Button'

type StyledButtonProps = ButtonProps & {
  hasChildren?: boolean
}

const baseStyles = tw`inline-flex justify-center items-center font-medium border border-solid border-transparent rounded-xl cursor-pointer select-none transform duration-200 ease-out focus:outline-none active:scale-95`

// Block styles
const blockStyles = (props: StyledButtonProps) => props.block && tw`flex w-full`

// Size styles
const extraSmallStyles = ({ size, hasChildren, shape }: StyledButtonProps) =>
  size === 'extra-small' && [
    tw`text-xs h-6 px-6 rounded-lg`,
    (!hasChildren || shape === 'circle') && tw`px-0 w-6`,
  ]

const smallStyles = ({ size, hasChildren, shape }: StyledButtonProps) =>
  size === 'small' && [
    tw`text-xs h-8 px-5 rounded-lg`,
    (!hasChildren || shape === 'circle') && tw`px-0 w-8`,
  ]

const mediumStyles = ({ size, hasChildren, shape }: StyledButtonProps) =>
  size === 'medium' && [
    tw`text-sm h-9 px-6 rounded-xl`,
    (!hasChildren || shape === 'circle') && tw`px-0 w-9`,
  ]

const largeStyles = ({ size, hasChildren, shape }: StyledButtonProps) =>
  size === 'large' && [
    tw`text-base h-12 px-8 rounded-2xl`,
    (!hasChildren || shape === 'circle') && tw`px-0 w-12`,
  ]

const extraLargeStyles = ({ size, hasChildren, shape }: StyledButtonProps) =>
  size === 'extra-large' && [
    tw`text-lg h-14 px-8 rounded-3xl`,
    (!hasChildren || shape === 'circle') && tw`px-0 w-14`,
  ]

// Variant styles
const defaultStyles = ({ variant, type }: StyledButtonProps) =>
  variant === 'default' && [
    type === 'filled' &&
      tw`text-dark-400 bg-light-300 hover:bg-light-100 active:bg-light-100`,
    type === 'outlined' &&
      tw`text-dark-400 bg-transparent border border-dark-400 hover:(text-dark-500 border-dark-500) active:(text-dark-500 border-dark-500)`,
    type === 'text' &&
      tw`text-dark-400 bg-transparent hover:text-dark-500 active:text-dark-500`,
  ]

const primaryStyles = ({ variant, type }: StyledButtonProps) =>
  variant === 'primary' && [
    type === 'filled' &&
      tw`text-white bg-primary hover:bg-primary-light active:bg-primary-dark`,
    type === 'outlined' &&
      tw`text-primary bg-transparent border border-primary hover:(text-primary-light border-primary-light) active:(text-primary-dark border-primary-dark)`,
    type === 'text' &&
      tw`text-primary bg-transparent hover:text-primary-light active:text-primary-dark`,
  ]

const secondaryStyles = (props: StyledButtonProps) =>
  props.variant === 'secondary' && [
    props.type === 'filled' &&
      tw`text-white bg-secondary hover:bg-secondary-light active:bg-secondary-dark`,
    props.type === 'outlined' &&
      tw`text-secondary bg-transparent border border-secondary hover:(text-secondary-light border-secondary-light) active:(text-secondary-dark border-secondary-dark)`,
    props.type === 'text' &&
      tw`text-secondary bg-transparent hover:text-secondary-light active:text-secondary-dark`,
  ]

const ghostStyles = ({ variant }: StyledButtonProps) =>
  variant === 'ghost' &&
  tw`text-dark-100 bg-transparent hover:bg-light-300 active:bg-light-100`

// Disabled styles
const disabledStyles = ({ disabled, variant, type }: StyledButtonProps) =>
  disabled && [
    [
      type === 'filled' &&
        tw`bg-light-300 text-dark-500 cursor-not-allowed hover:bg-light-300`,
      type === 'outlined' &&
        tw`border-dark-500 text-dark-500 cursor-not-allowed hover:(text-dark-500 border-dark-500)`,
      type === 'text' &&
        tw`text-dark-500 cursor-not-allowed hover:text-dark-500`,
    ],
    variant === 'ghost' && tw`hover:bg-light-300`,
  ]

// Shape styles
const circleStyles = ({ shape }: StyledButtonProps) =>
  shape === 'circle' && tw`rounded-full`

const StyledButton = styled('button')<StyledButtonProps>(
  baseStyles,
  blockStyles,
  extraSmallStyles,
  smallStyles,
  mediumStyles,
  largeStyles,
  extraLargeStyles,
  defaultStyles,
  primaryStyles,
  secondaryStyles,
  ghostStyles,
  disabledStyles,
  circleStyles
)

export default StyledButton
