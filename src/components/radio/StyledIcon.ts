import { styled } from 'emotion-solid'
import tw from 'twin.macro'

import type { IRadioProps } from './Radio'

type StyledRadioProps = IRadioProps & JSX.IntrinsicElements['span']

const baseStyles: any = (props: StyledRadioProps) => [
  tw`relative inline-block w-5 h-5 rounded-xl border-2 border-solid border-primary`,
  props.labelPosition === 'right' ? tw`mr-3.5` : tw`ml-3.5`,
  {
    '::after': tw`content absolute top-1/2 rounded-full left-1/2 w-9 h-9 bg-primary bg-opacity-20 transform -translate-x-1/2 -translate-y-1/2 scale-0 transition duration-300 ease-out`,
    ':hover::after': tw`transform -translate-x-1/2 -translate-y-1/2 scale-100`,
    '::before': tw`content absolute w-2.5 h-2.5 rounded-xl left-1/2 top-1/2 bg-light-300 bg-opacity-100 transform -translate-x-1/2 -translate-y-1/2  scale-0`,
  },
]

const checkedStyles = (props: StyledRadioProps) =>
  props.checked && [
    tw`bg-primary bg-center bg-light-300`,
    {
      '::before': tw`transform bg-primary -translate-x-1/2 -translate-y-1/2 scale-100 `,
    },
  ]

const disabledStyles = (props: StyledRadioProps) =>
  props.disabled && [
    tw`border-dark-500 cursor-default border-dark-500 cursor-not-allowed`,
    props.checked && [{ '::before': tw`bg-dark-500` }],
    { '::after': tw`hidden` },
  ]

const radioStyles = styled('span')<StyledRadioProps>(
  baseStyles,
  checkedStyles,
  disabledStyles
)

export default radioStyles
