import { styled } from 'emotion-solid'
import tw from 'twin.macro'

type StyledTableRowProps = { selected?: boolean; hoverable?: boolean }

const baseStyles = [
  tw`border-solid border-b border-t-0 border-r-0 border-l-0 border-light-300`,
]

const selectedStyles = ({ selected }: StyledTableRowProps) =>
  selected && { td: tw`bg-light-300 first:rounded-l-xl last:rounded-r-xl` }

const hoverableStyles = ({ hoverable }: StyledTableRowProps) =>
  hoverable && {
    ':hover td': tw`bg-light-300 first:rounded-l-xl last:rounded-r-xl`,
  }

const StyledTableRow = styled('tr')<StyledTableRowProps>(
  baseStyles,
  selectedStyles,
  hoverableStyles
)

export default StyledTableRow
