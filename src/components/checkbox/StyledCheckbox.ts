import tw from 'twin.macro'

import { styled } from '../../utils/styled'
import type { CheckboxProps } from './Checkbox'

type StyledCheckboxProps = CheckboxProps & JSX.IntrinsicElements['span']

const baseStyles = [
  tw`relative w-4 h-4 rounded border-2 border-solid border-primary active:border-primary-dark`,
  {
    '::after': tw`content absolute top-1/2 left-1/2 w-9 h-9 bg-primary bg-opacity-10 rounded-full transform -translate-x-1/2 -translate-y-1/2 scale-0 transition duration-300 ease-out`,
    ':hover::after': tw`transform -translate-x-1/2 -translate-y-1/2 scale-100`,
  },
]

const checkedStyles = ({ checked }: StyledCheckboxProps) =>
  checked && [
    tw`bg-primary bg-center bg-no-repeat active:bg-primary-dark`,
    {
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M2 9.00002L7 14L16 5.00002L14.59 3.58002L7 11.17L3.41 7.59002L2 9.00002Z' fill='white'/%3E%3C/svg%3E%0A")`,
    },
  ]

const indeterminateStyles = ({ indeterminate }: StyledCheckboxProps) =>
  indeterminate && {
    backgroundImage: `url("data:image/svg+xml,%3Csvg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='4' y='8' width='10' height='2' fill='white'/%3E%3C/svg%3E%0A")`,
  }

const disabledStyles = ({ disabled, checked }: StyledCheckboxProps) =>
  disabled && [
    tw`border-dark-500 cursor-default active:border-dark-500`,
    checked && tw`bg-dark-500 active:bg-dark-500`,
    { '::after': tw`hidden` },
  ]

const StyledCheckbox = styled('span')<StyledCheckboxProps>(
  baseStyles,
  checkedStyles,
  indeterminateStyles,
  disabledStyles
)

export default StyledCheckbox
