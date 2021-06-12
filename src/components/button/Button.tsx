import tw from 'twin.macro'
import { styled, css } from '../../utils/styled'

export type ButtonProps = {
  type?: 'primary' | 'secondary'
  children: any
}

const StyledButton = styled('button')(({ type }: ButtonProps) => [
  // Base styles
  tw`px-8 py-2 rounded focus:outline-none transform duration-75`,

  // Variant styles
  tw`hover:(scale-105 text-yellow-400)`,

  // Type primary styles
  type === 'primary' && tw`bg-black text-white border-black`,

  // Type secondary styles
  type === 'secondary' && [
    css`
      box-shadow: 0 0.1em 0 0 rgba(0, 0, 0, 0.25);
    `,
    tw`border-2 border-yellow-600`,
  ],
])

export function Button({ type, children }: ButtonProps) {
  return (
    <div>
      <StyledButton type={type}>{children}</StyledButton>
    </div>
  )
}