import { styled } from 'emotion-solid'
import { JSX } from 'solid-js'
import tw from 'twin.macro'

import type { InputProps } from './Input'

type StyledInputProps = JSX.IntrinsicElements['input']

const baseStyles = tw`border-2 w-full border-grey-light rounded-xl h-12 focus:outline-none px-3 text-base text-dark-100 focus:border-primary hover:border-blue-dark focus:border-2`

const filledStyle = (props: InputProps) => [props.filled && tw`bg-light-300`]

const blockStyle = (props: InputProps) => [props.block === false && tw`w-auto`]

const StyledInput = styled('input')<InputProps & StyledInputProps>(
  baseStyles,
  filledStyle,
  blockStyle
)

export default StyledInput
