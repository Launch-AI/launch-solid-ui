import { styled } from 'emotion-solid'
import type { JSX } from 'solid-js'
import tw from 'twin.macro'

import type { BadgeProps } from '.'

type StyledIconProps = BadgeProps & JSX.IntrinsicElements['span']

const baseStyles = [
  tw`absolute flex h-4 w-4 bg-blue justify-center items-center text-xxs font-sans border border-white rounded-full`,
]

const backgroundStyles = ({ badgeColor }: StyledIconProps) => [
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
  badgePlacement === 'top-right' && {
    top: '0%',
    right: '0%',
    transform: `translate(calc(-50% + ${offsetX || 0}px), calc(-50% + ${
      offsetY || 0
    }px))`,
  },
  badgePlacement === 'top-left' && {
    left: '-2%',
    top: '0%',
    transform: `translate(calc(-50% + ${offsetX || 0}px), calc(-50% + ${
      offsetY || 0
    }px))`,
  },
  badgePlacement === 'bottom-left' && {
    left: '-5%',
    bottom: '0%',
    transform: `translate(calc(-50% + ${offsetX || 0}px), calc(-50% + ${
      offsetY || 0
    }px))`,
  },
  badgePlacement === 'bottom-right' && {
    right: '0%',
    bottom: '0%',
    transform: `translate(calc(-50% + ${offsetX || 0}px), calc(-50% + ${
      offsetY || 0
    }px))`,
  },
]

const dotStyles = ({ count, countLimit = 99 }: StyledIconProps) => [
  !count && tw`h-2.5 w-2.5`,
  console.log(count, countLimit),
  count && count >= countLimit && tw`w-auto px-0.5`,
]

const StyledIcon = styled('span')<StyledIconProps>(
  baseStyles,
  backgroundStyles,
  iconPositionStyles,
  dotStyles
)

export default StyledIcon
