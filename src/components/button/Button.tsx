import type { Component, JSX } from 'solid-js'

import withDefaults from '../../utils/with-defaults'
import StyledButton from './StyledButton'
import * as DefaultStyle from './StyledIcon'

export type ButtonProps = {
  block?: boolean
  variant?: 'default' | 'primary' | 'secondary' | 'ghost'
  type?: 'filled' | 'outlined' | 'text'
  disabled?: boolean
  onClick?: JSX.IntrinsicElements['button']['onClick']
  /** a function to get css properties */
  getCSSProps?: (props?: ButtonProps | DefaultStyle.Props) => JSX.CSSProperties
}
/** for backward compatibility */
& DefaultStyle.Props &
  (
    | // Must specify icon, children or both - but never none of them
    {
        icon: JSX.Element
        children?: never
      }
    | { icon?: never; children: any }
    | { icon: JSX.Element; children: any }
  )

const Button: Component<ButtonProps> = (props) => {
  const { icon, children, getCSSProps = DefaultStyle.getCSSProps } = props

  const cssProps = getCSSProps(props)

  const beforeIcon = props.iconPosition === 'before' && icon && (
    <span style={{ ...cssProps }}>{icon}</span>
  )

  const afterIcon = props.iconPosition === 'after' && icon && (
    <span style={{ ...cssProps }}>{icon}</span>
  )

  return (
    <StyledButton {...props} hasChildren={!!children}>
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
