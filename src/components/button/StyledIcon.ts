import tw from 'twin.macro'

/** the default style that follows the Launch design philosophy */
export type Props = {
  /** icon size */
  size?: 'extra-small' | 'small' | 'medium' | 'large' | 'extra-large'
  /** button outer shape */
  shape?: 'rounded' | 'circle'
  /** the placement of the icon */
  iconPosition?: 'before' | 'after'
}

const baseStyles = tw`flex justify-center items-center`

const positionStyles = ({ iconPosition }: Props) => {
  switch (iconPosition) {
    case 'before': return tw`pr-1.5`
    case 'after': return tw`pl-1.5`
    default: return undefined
  }
}

const sizeStyles = ({ size }: Props) => {
  switch (size) {
    case 'small': return { svg: tw`w-4 h-4` }
    case 'medium': return { svg: tw`w-4 h-4` }
    case 'large': return { svg: tw`w-6 h-6` }
    case 'extra-large': return { svg: tw`w-6 h-6` }
    default: return undefined
  }
}

export const getCSSProps = (props: Props) => ({
  ...baseStyles,
  ...positionStyles(props),
  ...sizeStyles(props),
})
