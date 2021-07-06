import { Component } from 'solid-js'
import type { JSX } from 'solid-js'

import StyledIcon from './StyledIcon'
import StyledTag from './StyledTag'

type Color =
  | 'default'
  | 'grey'
  | 'purple'
  | 'green'
  | 'teal'
  | 'primary'
  | 'secondary'

export type TagProps = {
  color?: Color
  disabled?: boolean
  chilren?: JSX.Element
  iconBefore?: JSX.Element
  iconAfter?: JSX.Element
  size: 'default' | 'small'
}

const Tag: Component<TagProps> = (props) => {
  const beforeIcon = props.iconBefore && (
    <StyledIcon {...props} position="before">
      {props.iconBefore}
    </StyledIcon>
  )

  const afterIcon = props.iconAfter && (
    <StyledIcon {...props} position="after">
      {props.iconAfter}
    </StyledIcon>
  )
  return (
    <StyledTag {...props}>
      {beforeIcon}
      {props.children}
      {afterIcon}
    </StyledTag>
  )
}

export default Tag
