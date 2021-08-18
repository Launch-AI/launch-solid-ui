import { styled } from 'emotion-solid'
import type { JSX } from 'solid-js'
import tw from 'twin.macro'

import type { CollapseProps } from './Collapse'

type StyledHeaderProps = JSX.IntrinsicElements['div'] & {
  isFirst?: boolean
}

const baseStyles = tw`py-7 cursor-pointer`

const firstElementStyle = (props: StyledHeaderProps) => [
  props.isFirst && tw`pt-1.5`,
]

const StyledHeader = styled('div')<StyledHeaderProps & CollapseProps>(
  baseStyles,
  firstElementStyle
)

export default StyledHeader
