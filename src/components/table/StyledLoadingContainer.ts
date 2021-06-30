import { styled } from 'emotion-solid'
import tw from 'twin.macro'

type StyledLoadingContainerProps = {}

const baseStyles = tw`px-2 py-6`

const StyledLoadingContainer = styled('div')<StyledLoadingContainerProps>(
  baseStyles
)

export default StyledLoadingContainer
