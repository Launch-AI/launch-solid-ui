import type { JSX } from 'solid-js'
import tw from 'twin.macro'

import { styled } from '../../utils/styled'

type StyledContainerProps = {} & JSX.IntrinsicElements['button']

const baseStyles = tw`flex flex-col space-y-0.5 bg-transparent border-none cursor-pointer`

const StyledContainer = styled('button')<StyledContainerProps>(baseStyles)

export default StyledContainer
