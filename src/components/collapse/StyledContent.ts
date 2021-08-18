import { styled } from 'emotion-solid'
import { JSX } from 'solid-js'
import tw from 'twin.macro'

type StyledContentProps = JSX.IntrinsicElements['div'] & {
  isActive?: boolean
}

const baseStyles = tw`border-t py-0 h-0 opacity-0 invisible transition-all`

const activeStyles = (props: StyledContentProps) => [
  props.isActive && tw`h-auto visible py-5 opacity-100`,
]

const StyledContent = styled('div')<StyledContentProps>(
  baseStyles,
  activeStyles
)

export default StyledContent
