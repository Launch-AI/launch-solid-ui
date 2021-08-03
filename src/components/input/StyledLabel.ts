import { styled } from 'emotion-solid'
import tw from 'twin.macro'

import { InputProps } from './Input'

type StyledLabelProps = {
  focused?: boolean
}

const baseStyles = tw`block text-base text-dark-100 ml-3 mb-1 transition-all pointer-events-none`

const floatLabelStyle = (props: InputProps & StyledLabelProps) => [
  props.labelFloat && [tw`absolute inline-block`, { 'line-height': '48px' }],
  props.labelFloat &&
    props.focused && [tw`text-xs bg-white text-primary px-px`, { top: '-7px' }],
]

const StyledLabel = styled('label')<InputProps & StyledLabelProps>(
  baseStyles,
  floatLabelStyle
)

export default StyledLabel
