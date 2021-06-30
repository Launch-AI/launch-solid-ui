import { styled } from 'emotion-solid'
import tw from 'twin.macro'

type StyledContainerProps = {}

const baseStyles = tw`flex flex-col space-y-5`

const StyledContainer = styled('div')<StyledContainerProps>(baseStyles)

export default StyledContainer
