import type { Component, JSX } from 'solid-js'

import withDefaults from '../../utils/with-defaults'
import StyledButton from './StyledButton'
import StyledIcon from './StyledIcon'

export type ButtonProps = {
  class?: string
  block?: boolean
  variant?: 'default' | 'primary' | 'secondary' | 'ghost'
  type?: 'filled' | 'outlined' | 'text'
  size?: 'extra-small' | 'small' | 'medium' | 'large' | 'extra-large'
  iconPosition?: 'before' | 'after'
  shape?: 'rounded' | 'circle'
  disabled?: boolean
  onClick?: JSX.IntrinsicElements['button']['onClick']
} & (
  | // Must specify icon, children or both - but never none of them
  {
      icon: JSX.Element
      children?: never
    }
  | { icon?: never; children: any }
  | { icon: JSX.Element; children: any }
)

const Button: Component<ButtonProps> = (props) => {
  const { size, icon, iconPosition, children } = props

  const beforeIcon = iconPosition === 'before' && icon && (
    <StyledIcon position={children && 'before'} size={size}>
      {icon}
    </StyledIcon>
  )

  const afterIcon = iconPosition === 'after' && icon && (
    <StyledIcon position={children && 'after'} size={size}>
      {icon}
    </StyledIcon>
  )

  return (
    <StyledButton {...props} class={props.class} hasChildren={!!children}>
      {beforeIcon}
      {children}
      {afterIcon}
    </StyledButton>
  )
}

export default withDefaults(Button, {
  variant: 'default',
  type: 'filled',
  size: 'medium',
  iconPosition: 'before',
  shape: 'rounded',
})
