import { styled } from 'emotion-solid'
import tw from 'twin.macro'

type StyledLabelProps = { block?: boolean }

const baseStyles = tw`relative inline-flex`

const blockStyles = ({ block }: StyledLabelProps) => block && tw`flex`

const StyledLabel = styled('label')<StyledLabelProps>(baseStyles, blockStyles)

export default StyledLabel
