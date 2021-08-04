import { styled } from 'emotion-solid'
import { JSX } from 'solid-js'
import tw from 'twin.macro'

type StyledContainerProps = JSX.IntrinsicElements['div']

const baseStyles = tw`border-b`

const StyledContainer = styled('div')<StyledContainerProps>(baseStyles)

export default StyledContainer
