import { styled } from 'emotion-solid'
import type { JSX } from 'solid-js'
import tw from 'twin.macro'

type StyledCheckboxProps = JSX.IntrinsicElements['input']

const baseStyles = tw`absolute w-0 h-0 opacity-0`

const StyledCheckbox = styled('input')<StyledCheckboxProps>(baseStyles)

export default StyledCheckbox
