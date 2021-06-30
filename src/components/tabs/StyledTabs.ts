import { styled } from 'emotion-solid'
import tw from 'twin.macro'

type StyledTabsProps = {}

const baseStyles = tw`flex`

const StyledTabs = styled('div')<StyledTabsProps>(baseStyles)

export default StyledTabs
