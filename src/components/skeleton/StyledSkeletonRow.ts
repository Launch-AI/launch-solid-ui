import { styled } from 'emotion-solid'
import tw from 'twin.macro'

import { SkeletonProps } from './Skeleton'

type StyledSkeletonRowProps = {} & SkeletonProps

const baseStyles = tw`w-full h-4 bg-light-100 rounded animate-skeleton-loading bg-skeleton-loading bg-gradient-skeleton-loading`

const roundedStyles = ({ rounded }: StyledSkeletonRowProps) =>
  rounded && tw`rounded-lg`

const StyledSkeletonRow = styled('div')<StyledSkeletonRowProps>(
  baseStyles,
  roundedStyles
)

export default StyledSkeletonRow
