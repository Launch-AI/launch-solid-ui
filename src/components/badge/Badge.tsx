import { Component, Show } from 'solid-js'
import type { JSX } from 'solid-js'

import StyledBadge from './StyledBadge'
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

export type Shape = 'rounded' | 'square'

type badgeType = 'icon'

export type BadgeProps = {
  count?: number
  countLimit?: number
  color?: Color
  shape?: Shape
  children?: JSX.Element
  badgeColor?: Color
  badgePlacement?: BadgePlacement
  badgeType?: badgeType
}

const Badge: Component<BadgeProps> = (props) => {
  let countLimit = props.countLimit || 99
  const limit = props.count! > countLimit ? `${countLimit}+` : props.count

  return (
    <StyledBadge {...props}>
      <StyledIcon {...props}>
        <Show when={props.count}>{limit}</Show>
      </StyledIcon>
      {props.children}
    </StyledBadge>
  )
}

export default Badge
