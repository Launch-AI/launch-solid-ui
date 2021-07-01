import { styled } from 'emotion-solid'
import type { JSX } from 'solid-js'
import tw from 'twin.macro'

type StyledInputProps = JSX.IntrinsicElements['input']

const baseStyles = tw`absolute w-0 h-0 opacity-0 ml-2`

const StyledInput = styled('input')<StyledInputProps>(baseStyles)

export default StyledInput
