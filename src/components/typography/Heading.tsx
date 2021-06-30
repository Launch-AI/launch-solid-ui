import { Component } from 'solid-js'

import withDefaults from '../../utils/with-defaults'
import StyledHeading from './StyledHeading'

export type HeadingProps = {
  level?: 1 | 2 | 3 | 4 | 5 | 6
  weight?: 'light' | 'normal' | 'medium' | 'bold'
}

const Heading: Component<HeadingProps> = (props) => {
  const component = `h${props.level || 1}`

  return (
    <StyledHeading as={component} {...props}>
      {props.children}
    </StyledHeading>
  )
}

export default withDefaults(Heading, {
  level: 1,
})
