import { styled } from 'emotion-solid'
import type { JSX } from 'solid-js'
import tw from 'twin.macro'

import type { BadgeProps } from '.'

type StyledIconProps = BadgeProps & JSX.IntrinsicElements['span']

const baseStyles = [
  tw`absolute flex h-4 w-4 px-1 bg-blue justify-center items-center text-xxs font-sans border border-white rounded-full -top-px -right-px`,
]

const backgroundStyles = ({ badgeColor }: StyledIconProps) => [
  badgeColor === 'green' && tw`bg-green`,
  badgeColor === 'purple' && tw`bg-purple`,
  badgeColor === 'grey' && tw`bg-grey-dark`,
  badgeColor === 'teal' && tw`bg-teal`,
  badgeColor === 'danger' && tw`bg-danger`,
]

const iconPositionStyles = ({
  shape,
  count,
  badgePlacement,
  badgeType,
}: StyledIconProps) => [
  count && shape === 'square' && tw`-top-1 -right-1`,
  count &&
    shape === 'square' && [
      badgePlacement === 'top-left' && tw`-left-1 right-auto`,
      badgePlacement === 'bottom-left' &&
        tw`-left-1 right-auto top-auto -bottom-1`,
      badgePlacement === 'bottom-right' && tw`top-auto -bottom-1`,
    ],
  count &&
    shape === 'rounded' && [
      badgePlacement === 'top-left' && tw`-left-px right-auto`,
      badgePlacement === 'bottom-left' &&
        tw`-left-px right-auto top-auto -bottom-px`,
      badgePlacement === 'bottom-right' && tw`top-auto -bottom-px`,
    ],
  badgeType && [
    tw`-top-1.5 -right-1.5`,
    badgePlacement === 'top-left' && tw`-left-1.5 right-auto`,
    badgePlacement === 'bottom-left' &&
      tw`-left-1.5 right-auto top-auto -bottom-1.5`,
    badgePlacement === 'bottom-right' && tw`top-auto -bottom-1.5`,
  ],
]

const dotStyles = ({
  count,
  shape,
  badgePlacement = 'top-right',
  badgeType,
}: StyledIconProps) => [
  !count && tw`h-2.5 w-2.5 top-0.5 right-0.5`,
  !count &&
    shape === 'square' && [
      tw`-top-px -right-px`,
      badgePlacement === 'top-left' && tw`-left-px right-auto`,
      badgePlacement === 'bottom-left' &&
        tw`-left-px right-auto top-auto -bottom-px`,
      badgePlacement === 'bottom-right' && tw`top-auto -bottom-px`,
    ],
  !count &&
    shape === 'rounded' && [
      badgePlacement === 'top-left' &&
        tw`top-0.5 bottom-auto left-0.5 right-auto`,
      badgePlacement === 'bottom-left' &&
        tw`left-0.5 right-auto top-auto bottom-0.5`,
      badgePlacement === 'bottom-right' && tw`top-auto bottom-0.5`,
    ],
  !count &&
    badgeType && [
      tw`-top-1 -right-1`,
      badgePlacement === 'top-left' && tw`-left-1 right-auto`,
      badgePlacement === 'bottom-left' &&
        tw`-left-1 right-auto top-auto -bottom-1`,
      badgePlacement === 'bottom-right' && tw`top-auto -bottom-1`,
    ],
]

const dotWidthStyles = ({ count }: StyledIconProps) => [
  count && count > 10 && tw`w-auto px-1 -right-2`,
]

const StyledIcon = styled('span')<StyledIconProps>(
  baseStyles,
  backgroundStyles,
  iconPositionStyles,
  dotStyles,
  dotWidthStyles
)

export default StyledIcon
