import { styled } from 'emotion-solid'
import tw from 'twin.macro'

type StyledTableDataProps = {
  bordered?: boolean
  width?: string | number
} & JSX.IntrinsicElements['td']

const baseStyles = tw`font-sans text-dark-300 text-base px-4 py-2 h-12 align-middle border-solid border-t-0 border-b-0 border-l-0 border-r border-light-300 last:border-r-0`

const borderedStyles = ({ bordered }: StyledTableDataProps) =>
  bordered === false && tw`border-none`

const widthStyles = ({ width }: StyledTableDataProps) =>
  width != null && { width }

const StyledTableData = styled('td')<StyledTableDataProps>(
  baseStyles,
  borderedStyles,
  widthStyles
)

export default StyledTableData
