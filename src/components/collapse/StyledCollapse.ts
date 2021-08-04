import { styled } from 'emotion-solid'
import tw from 'twin.macro'

import type { CollapseProps } from './Collapse'

const baseStyles = [tw`border p-8 rounded`, { 'border-radius': '15px' }]

const StyledCollapse = styled('div')<CollapseProps>(baseStyles)

export default StyledCollapse
