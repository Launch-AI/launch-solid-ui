import { styled } from 'emotion-solid'
import type { JSX } from 'solid-js'
import tw from 'twin.macro'

import type { BadgeProps } from '.'

type StyledIconProps = BadgeProps & JSX.IntrinsicElements['span']

const baseStyles = [
  tw`absolute flex h-4 w-4 bg-blue justify-center items-center text-xxs font-sans border border-white rounded-full z-50`,
]

const backgroundStyles = ({ badgeColor }: StyledIconProps) => [
  badgeColor === 'default' && tw`bg-light-300`,
  badgeColor === 'primary' && tw`bg-primary`,
  badgeColor === 'secondary' && tw`bg-secondary`,
  badgeColor === 'green' && tw`bg-green`,
  badgeColor === 'purple' && tw`bg-purple`,
  badgeColor === 'grey' && tw`bg-grey-dark`,
  badgeColor === 'teal' && tw`bg-teal`,
  badgeColor === 'danger' && tw`bg-danger`,
]

const iconPositionStyles = ({
  badgePlacement = 'top-right',
  offsetX,
  offsetY,
}: StyledIconProps) => [
  {
    transform: `translate(calc(-50% + ${offsetX || 0}px), calc(-50% + ${
      offsetY || 0
    }px))`,
    top:
      badgePlacement === 'top-right' || badgePlacement === 'top-left'
        ? '0%'
        : 'auto',
    bottom:
      badgePlacement === 'bottom-right' || badgePlacement === 'bottom-left'
        ? '0%'
        : 'auto',
    left:
      badgePlacement === 'top-left' || badgePlacement === 'bottom-left'
        ? '0%'
        : 'auto',
    right:
      badgePlacement === 'top-right' || badgePlacement === 'bottom-right'
        ? '0%'
        : 'auto',
  },
]

const dotStyles = ({ count, countLimit = 99 }: StyledIconProps) => [
  !count && tw`h-2.5 w-2.5`,
  count && count >= countLimit && tw`w-auto px-0.5`,
]

const StyledIcon = styled('span')<StyledIconProps>(
  baseStyles,
  backgroundStyles,
  iconPositionStyles,
  dotStyles
)

export default StyledIcon
