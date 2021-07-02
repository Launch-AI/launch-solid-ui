import { styled } from 'emotion-solid'
import type { JSX } from 'solid-js'
import tw from 'twin.macro'

type StyledRadioGroupProps = { inline?: boolean } & JSX.IntrinsicElements['div']

const baseStyles = ({ inline }: StyledRadioGroupProps) =>
  inline ? tw`flex` : tw`block`

const StyledRadioGroup = styled('div')<StyledRadioGroupProps>(baseStyles)

export default StyledRadioGroup
