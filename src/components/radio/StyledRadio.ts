import { styled } from 'emotion-solid'
import tw from 'twin.macro'

import { IRadioProps } from './Radio'

const StyledLabel = tw`relative flex items-center cursor-pointer`

export default styled('label')<IRadioProps & JSX.IntrinsicElements['label']>(
  StyledLabel
)
