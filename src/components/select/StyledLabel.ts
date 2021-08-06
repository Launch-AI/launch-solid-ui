import { styled } from 'emotion-solid'
import tw from 'twin.macro'

import { SelectProps } from './Select'

type StyledLabelProps = JSX.IntrinsicElements['label'] & {
  focused?: boolean
}

const baseStyles = tw`block text-base text-dark-100 ml-3 mb-1 transition-all pointer-events-none`

const floatLabelStyles = (props: SelectProps & StyledLabelProps) => [
  props.labelFloat && [tw`absolute inline-block`, { 'line-height': '48px' }],
  props.labelFloat &&
    props.focused && [tw`text-xs bg-white px-px`, { top: '-7px' }],
]

const StyledLabel = styled('label')<SelectProps & StyledLabelProps>(
  baseStyles,
  floatLabelStyles
)

export default StyledLabel
