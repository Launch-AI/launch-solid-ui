import { styled } from 'emotion-solid'
import { JSX } from 'solid-js'
import tw from 'twin.macro'

import { InputProps } from './Input'

type StyledContainerProps = JSX.IntrinsicElements['div'] & {
  focused?: boolean
}

const baseStyles = tw`relative`

const floatLabelStyle = (props: InputProps & StyledContainerProps) => [
  props.labelFloat &&
    props.focused && {
      ':hover label': tw`text-blue-dark`,
    },
]

const StyledContainer = styled('div')<StyledContainerProps & InputProps>(
  baseStyles,
  floatLabelStyle
)

export default StyledContainer
