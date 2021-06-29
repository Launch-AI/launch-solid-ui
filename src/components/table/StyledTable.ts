import { styled } from 'emotion-solid'
import tw from 'twin.macro'

import type { TableProps } from './Table'

type StyledTableProps<Record = any> = TableProps<Record>

const baseStyles = tw`border-collapse text-left`

const blockStyles = ({ block }: StyledTableProps) => block && tw`w-full`

const StyledTable = styled('table')<StyledTableProps>(baseStyles, blockStyles)

export default StyledTable
