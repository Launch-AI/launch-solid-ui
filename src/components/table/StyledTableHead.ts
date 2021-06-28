import tw from 'twin.macro'

import { styled } from '../../utils/styled'

type StyledTableHeadProps = {
  bordered?: boolean
  width?: string | number
} & JSX.IntrinsicElements['th']

const baseStyles = tw`font-sans font-bold text-dark-100 text-base px-4 h-11 align-middle border-solid border-t-0 border-b-0 border-l-0 border-r border-light-300 last:border-r-0`

const borderedStyles = ({ bordered }: StyledTableHeadProps) =>
  bordered === false && tw`border-none`

const widthStyles = ({ width }: StyledTableHeadProps) =>
  width != null && { width }

const StyledTableHead = styled('th')<StyledTableHeadProps>(
  baseStyles,
  borderedStyles,
  widthStyles
)

export const StyledTableHeadInner = styled('div')(
  tw`flex justify-between items-center`
)

export default StyledTableHead
