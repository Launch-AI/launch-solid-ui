import tw from 'twin.macro'

import { styled } from '../../utils/styled'

type StyledLabelProps = { block?: boolean }

const baseStyles = tw`relative inline-flex`

const blockStyles = ({ block }: StyledLabelProps) => block && tw`flex`

const StyledLabel = styled('label')<StyledLabelProps>(baseStyles, blockStyles)

export default StyledLabel
