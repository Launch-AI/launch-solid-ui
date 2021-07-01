import { styled } from 'emotion-solid'
import type { JSX } from 'solid-js'
import tw from 'twin.macro'

import { RadioProps } from './Radio'

type StyledLabelProps = RadioProps & JSX.IntrinsicElements['label']

const baseStyles = (props: RadioProps) => [
  tw`relative flex text-dark-200 font-sans items-center cursor-pointer text-base`,
  props.disabled && tw`text-dark-500 cursor-not-allowed`,
]

const StyledLabel = styled('label')<StyledLabelProps>(baseStyles)

export default StyledLabel
