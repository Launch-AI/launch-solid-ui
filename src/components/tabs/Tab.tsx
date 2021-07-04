import { Component } from 'solid-js'

import StyledTab from './StyledTab'

export type TabProps = {
  class?: string
  active?: boolean
  onClick?: () => void
}

const Tab: Component<TabProps> = (props) => {
  return (
    <StyledTab {...props} class={props.class}>
      {props.children}
    </StyledTab>
  )
}

export default Tab
