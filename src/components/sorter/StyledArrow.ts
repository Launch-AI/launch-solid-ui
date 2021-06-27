import tw from 'twin.macro'

import { styled } from '../../utils/styled'

type StyledArrowProps = {
  active?: boolean
  direction?: 'up' | 'down'
}

const baseStyles = tw`inline-flex text-dark-500`

const activeStyles = ({ active }: StyledArrowProps) =>
  active && tw`text-dark-300`

const directionStyles = ({ direction }: StyledArrowProps) =>
  direction === 'down' && tw`transform rotate-180`

const StyledArrow = styled('span')<StyledArrowProps>(
  baseStyles,
  activeStyles,
  directionStyles
)

export default StyledArrow
