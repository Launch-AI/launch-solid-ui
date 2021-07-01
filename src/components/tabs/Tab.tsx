import { Component } from 'solid-js'

import StyledTab from './StyledTab'

export type TabProps = {
  active?: boolean
  onClick?: () => void
}

const Tab: Component<TabProps> = (props) => {
  return <StyledTab {...props}>{props.children}</StyledTab>
}

export default Tab
