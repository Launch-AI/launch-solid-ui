import { styled } from 'emotion-solid'
import tw from 'twin.macro'

import { TabProps } from './Tab'

type StyledTabProps = {} & TabProps

const baseStyles = tw`inline-flex items-center font-medium text-dark-500 px-4 py-2 bg-transparent border-solid border-b border-t-0 border-l-0 border-r-0 border-light-300 cursor-pointer transition duration-200 hover:(text-dark-400 border-light-100)`

const activeStyles = ({ active }: StyledTabProps) =>
  active && tw`text-primary border-primary hover:(text-primary border-primary)`

const StyledTab = styled('button')<StyledTabProps>(baseStyles, activeStyles)

export default StyledTab
