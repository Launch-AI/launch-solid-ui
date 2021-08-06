import { styled } from 'emotion-solid'
import { JSX } from 'solid-js'
import tw from 'twin.macro'

import type { OptionProps } from './Option'

type StyledOptionProps = JSX.IntrinsicElements['div']

const baseStyles = tw`cursor-pointer px-3 py-2.5 hover:bg-light-300 text-dark-100`

const activeStyles = (props: OptionProps) => [
  props.active && tw`bg-primary-100`,
]

const StyledOption = styled('div')<OptionProps & StyledOptionProps>(
  baseStyles,
  activeStyles
)

export default StyledOption
