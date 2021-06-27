import tw from 'twin.macro'

import { styled } from '../../utils/styled'

const baseStyles = tw`relative inline-flex w-6 h-6 p-1`

const StyledLabel = styled('label')(baseStyles)

export default StyledLabel
