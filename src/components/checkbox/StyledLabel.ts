import { styled } from 'emotion-solid'
import tw from 'twin.macro'

const baseStyles = tw`relative inline-flex w-6 h-6 p-1`

const StyledLabel = styled('label')(baseStyles)

export default StyledLabel
