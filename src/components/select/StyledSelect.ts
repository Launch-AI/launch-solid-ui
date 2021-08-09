import { styled } from 'emotion-solid'
import tw from 'twin.macro'

import { SelectProps } from './Select'

const baseStyles = tw`relative`

type StyledSelectProps = JSX.IntrinsicElements['div'] & {
  focused?: boolean
  active?: boolean
}
const selectInputStyles = (props: StyledSelectProps) => [
  {
    '.select': tw`flex cursor-pointer items-center h-12 border-2 rounded-xl px-3.5 text-dark-100 hover:border-blue-dark`,
  },
  props.focused &&
    props.active && {
      '.select': tw`border-primary`,
      '.select--label': tw`text-primary`,
      '.select--wrapper:hover .select--label': tw`text-blue-dark`,
    },
]

const selectedDropdownStyles = [
  {
    '.select--dropdown': [
      tw`absolute bg-white w-full max-h-80 overflow-y-auto border py-1 z-10`,
      {
        top: '108%',
        'box-shadow':
          '0px 0px 1px rgba(18, 17, 17, 0.08), 0px 0.5px 2px rgba(113, 112, 112, 0.16)',
        'border-radius': '8px',
      },
    ],
  },
]

const StyledSelect = styled('div')<SelectProps & StyledSelectProps>(
  baseStyles,
  selectInputStyles,
  selectedDropdownStyles
)

export default StyledSelect
