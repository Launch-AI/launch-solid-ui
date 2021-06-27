import tw from 'twin.macro'

import { styled } from '../../utils/styled'

type StyledTableRowProps = { selected?: boolean }

const baseStyles = [
  tw`border-solid border-b border-t-0 border-r-0 border-l-0 border-light-300`,
  {
    ':hover td': tw`bg-light-300 first:rounded-l-xl last:rounded-r-xl`,
  },
]

const selectedStyles = ({ selected }: StyledTableRowProps) =>
  selected && { td: tw`bg-light-300 first:rounded-l-xl last:rounded-r-xl` }

const StyledTableRow = styled('tr')<StyledTableRowProps>(
  baseStyles,
  selectedStyles
)

export default StyledTableRow
