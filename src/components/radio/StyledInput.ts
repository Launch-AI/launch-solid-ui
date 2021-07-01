import { styled } from 'emotion-solid'
import tw from 'twin.macro'

type InputProps = JSX.IntrinsicElements['input']

const StyledInput = tw`absolute w-0 h-0 opacity-0 ml-2`

export default styled('input')<InputProps>(StyledInput)
