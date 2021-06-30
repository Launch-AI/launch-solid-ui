import { Component } from 'solid-js'

import withDefaults from '../../utils/with-defaults'
import StyledText from './StyledText'

export type TextProps = {
  type?: 'normal' | 'large' | 'caption' | 'overline'
  weight?: 'light' | 'normal' | 'medium' | 'bold'
}

const Text: Component<TextProps> = (props) => {
  return <StyledText {...props}>{props.children}</StyledText>
}

export default withDefaults(Text, {
  type: 'normal',
  weight: 'normal',
})
