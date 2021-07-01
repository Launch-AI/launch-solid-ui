import { styled } from 'emotion-solid'
import tw from 'twin.macro'

import type { IRadioProps } from './Radio'

type styledRadioProps = IRadioProps & JSX.IntrinsicElements['span']

const baseStyles: any = [
  tw`relative w-3 inline-block h-3 rounded-xl border-2 border-solid border-primary mx-2`,
  {
    '::after': tw`content absolute top-1/2 rounded-xl left-1/2 w-6 h-6 bg-primary bg-opacity-20 transform -translate-x-1/2 -translate-y-1/2 scale-0 transition duration-300 ease-out`,
    ':hover::after': tw`transform -translate-x-1/2 -translate-y-1/2 scale-100`,
    '::before': tw`content absolute w-2 h-2 rounded-xl left-1/2 top-1/2 bg-light-300 bg-opacity-100 transform -translate-x-1/2 -translate-y-1/2  scale-0`,
  },
]

const checkedStyles = (props: styledRadioProps) =>
  props.checked && [
    tw`bg-primary bg-center bg-light-300`,
    {
      '::before': tw`transform bg-primary -translate-x-1/2 -translate-y-1/2 scale-100 `,
    },
  ]

const disabledStyles = ({ disabled, checked }: styledRadioProps) =>
  disabled && [
    tw`border-dark-500 cursor-default border-dark-500`,
    checked && tw`bg-dark-500 bg-dark-500`,
    { '::after': tw`hidden` },
  ]

const radioStyles = styled('span')<styledRadioProps>(
  baseStyles,
  checkedStyles,
  disabledStyles
)

export default radioStyles
