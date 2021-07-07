import { styled } from 'emotion-solid'
import type { JSX } from 'solid-js'
import tw from 'twin.macro'

import type { BadgeProps } from './Badge'

type StyledContainerProps = BadgeProps & JSX.IntrinsicElements['div']

const baseStyles = tw`relative inline-block`

const backgroundStyles = ({ color }: StyledContainerProps) => [
  color === 'green' && tw`bg-green`,
  color === 'purple' && tw`bg-purple`,
  color === 'grey' && tw`bg-grey-dark`,
  color === 'teal' && tw`bg-teal`,
]

const textStyles = tw`text-white`

const StyledContainer = styled('div')<StyledContainerProps>(
  baseStyles,
  backgroundStyles,
  textStyles
)

export default StyledContainer
