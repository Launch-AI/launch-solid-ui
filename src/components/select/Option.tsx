import { Component } from 'solid-js'

import StyledOption from './StyledOption'

export type OptionProps = {
  active?: boolean
  value?: string | number
}

const Option: Component<OptionProps> = (props) => {
  return <StyledOption {...props}>{props.children}</StyledOption>
}

export default Option
