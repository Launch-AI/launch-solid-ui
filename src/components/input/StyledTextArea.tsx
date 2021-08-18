import { styled } from 'emotion-solid'
import { JSX } from 'solid-js'
import tw from 'twin.macro'

import type { InputProps } from './Input'

type StyledTextAreaProps = JSX.IntrinsicElements['textarea']

const baseStyles = [
  tw`border-2 w-full pt-2.5 border-grey-light rounded-xl focus:outline-none px-3 text-base text-dark-100 focus:border-primary hover:border-blue-dark focus:border-2`,
  {
    'min-height': '100px',
  },
]

const filledStyle = (props: InputProps) => [props.filled && tw`bg-light-300`]

const blockStyle = (props: InputProps) => [props.block === false && tw`w-auto`]

const StyledTextArea = styled('textarea')<InputProps & StyledTextAreaProps>(
  baseStyles,
  filledStyle,
  blockStyle
)

export default StyledTextArea
