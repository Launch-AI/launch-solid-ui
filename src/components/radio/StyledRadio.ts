import { styled } from 'emotion-solid'
import tw from 'twin.macro'

import { IRadioProps } from './Radio'

const StyledLabel = (props: IRadioProps) => [
  tw`relative flex text-dark-200 font-sans items-center cursor-pointer text-base`,
  props.disabled && tw`text-dark-500 cursor-not-allowed`,
]

export default styled('label')<IRadioProps & JSX.IntrinsicElements['label']>(
  StyledLabel
)
