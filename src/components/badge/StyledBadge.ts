import { styled } from 'emotion-solid'
import type { JSX } from 'solid-js'
import tw from 'twin.macro'

import type { BadgeProps } from './Badge'

type StyledBadgeProps = BadgeProps & JSX.IntrinsicElements['div']

const baseStyles = tw`relative flex bg-blue items-center justify-center h-12 w-12 rounded-full`

const backgroundStyles = ({ color }: StyledBadgeProps) => [
  color === 'green' && tw`bg-green`,
  color === 'purple' && tw`bg-purple`,
  color === 'grey' && tw`bg-grey-dark`,
  color === 'teal' && tw`bg-teal`,
]

const textStyles = tw`text-white`

const radiusStyles = ({ shape }: StyledBadgeProps) => [
  shape === 'square' && tw`rounded-xl`,
]

const iconStyles = ({ badgeType }: StyledBadgeProps) => [
  badgeType === 'icon' && tw`inline-block h-auto w-auto bg-transparent`,
  badgeType !== 'icon' && {
    svg: {
      height: '20px',
      width: '20px',
    },
  },
]

const StyledBadge = styled('div')<StyledBadgeProps>(
  baseStyles,
  backgroundStyles,
  textStyles,
  radiusStyles,
  iconStyles
)

export default StyledBadge
