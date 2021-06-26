import type { JSX } from 'solid-js'

import withDefaults from '../../utils/with-defaults'
import StyledButton from './StyledButton'
import StyledIcon from './StyledIcon'

export type ButtonProps = {
  block?: boolean
  variant?: 'primary' | 'secondary' | 'ghost'
  type?: 'filled' | 'outlined' | 'text'
  size?: 'small' | 'medium' | 'large' | 'extra-large'
  iconPosition?: 'before' | 'after'
  shape?: 'rounded' | 'circle'
  disabled?: boolean
} & (
  | // Must specify icon, children or both - but never none of them
  {
      icon: JSX.Element
      children?: never
    }
  | { icon?: never; children: any }
  | { icon: JSX.Element; children: any }
)

function Button(props: ButtonProps) {
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
    <StyledButton {...props} hasChildren={!!children}>
      {beforeIcon}
      {children}
      {afterIcon}
    </StyledButton>
  )
}

export default withDefaults(Button, {
  variant: 'primary',
  type: 'filled',
  size: 'medium',
  iconPosition: 'before',
  shape: 'rounded',
})
