import { Component, Show } from 'solid-js'
import type { JSX } from 'solid-js'

import StyledContainer from './StyledContainer'
import StyledIcon from './StyledIcon'

export type Color =
  | 'default'
  | 'grey'
  | 'purple'
  | 'green'
  | 'teal'
  | 'primary'
  | 'secondary'
  | 'danger'

export type BadgePlacement =
  | 'top-left'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-right'

export type BadgeProps = {
  count?: number
  countLimit?: number
  color?: Color
  children?: JSX.Element
  badgeColor?: Color
  badgePlacement?: BadgePlacement
  offsetX?: number
  offsetY?: number
}

const Badge: Component<BadgeProps> = (props) => {
  let countLimit = props.countLimit || 99
  const limit = props.count! > countLimit ? `${countLimit}+` : props.count

  return (
    <StyledContainer {...props}>
      <StyledIcon {...props}>
        <Show when={props.count}>{limit}</Show>
      </StyledIcon>
      {props.children}
    </StyledContainer>
  )
}

export default Badge
