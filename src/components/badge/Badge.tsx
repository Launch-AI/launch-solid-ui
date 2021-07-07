import { Component, createMemo, Show } from 'solid-js'
import type { JSX } from 'solid-js'

import withDefaults from '../../utils/with-defaults'
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
  const limit = createMemo(() =>
    props.count! > props.countLimit! ? `${props.countLimit}+` : props.count
  )

  return (
    <StyledContainer {...props}>
      <StyledIcon {...props}>
        <Show when={props.count}>{limit()}</Show>
      </StyledIcon>
      {props.children}
    </StyledContainer>
  )
}

export default withDefaults(Badge, {
  countLimit: 99,
})
