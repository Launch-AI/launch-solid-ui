import { Component, createSignal, JSX, onMount, Show } from 'solid-js'

import StyledContainer from './StyledContainer'
import StyledInput from './StyledInput'
import StyledLabel from './StyledLabel'

export type InputProps = {
  filled?: boolean
  label?: JSX.Element
  placeholder?: string
  labelFloat?: boolean
  onFocus?: (e: Event) => void
  onBlur?: (e: Event) => void
  block?: boolean
}

const Input: Component<InputProps> = (props) => {
  const [isFocused, setIsFocused] = createSignal(false)
  const handleFocus = (e: Event) => {
    props.onFocus && props.onFocus(e)
    setIsFocused(true)
  }
  const handleBlur = (e: Event) => {
    props.onBlur && props.onBlur(e)
    const target = e.target as HTMLInputElement
    if (!target?.value) {
      setIsFocused(false)
    }
  }

  return (
    <StyledContainer {...props} focused={isFocused()}>
      <Show when={props.label}>
        <StyledLabel {...props} focused={isFocused()}>
          {props.label}
        </StyledLabel>
      </Show>
      <StyledInput {...props} onFocus={handleFocus} onBlur={handleBlur} />
    </StyledContainer>
  )
}

export default Input
