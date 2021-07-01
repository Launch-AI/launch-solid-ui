import { Component, createEffect, createSignal } from 'solid-js'

import StyledIcon from './StyledIcon'
import StyledInput from './StyledInput'
import StyledLabel from './StyledRadio'

export type RadioProps = {
  label?: JSX.Element | string
  labelPosition?: 'right' | 'left'
  checked?: boolean
  indeterminate?: boolean
  disabled?: boolean
  className?: string
  onChange?: (checked: boolean) => void
}

const Radio: Component<RadioProps> = (props) => {
  const [isChecked, setIsChecked] = createSignal(false)

  createEffect(() => {
    if (props.checked !== null && props.checked !== undefined) {
      setIsChecked(props.checked)
    }
  })

  const handleChange = (ev: Event) => {
    if (props.disabled) return
    const newChecked = (ev.target as HTMLInputElement).checked
    setIsChecked(newChecked)
    props.onChange && props.onChange(newChecked)
  }

  const labelBefore =
    props.label && props.labelPosition !== 'right' && props.label

  const lableAfter =
    props.label && props.labelPosition === 'right' && props.label

  return (
    <StyledLabel disabled={props.disabled}>
      <>
        {labelBefore}
        <StyledInput
          type="radio"
          checked={isChecked()}
          disabled={props.disabled}
          onChange={handleChange}
        />
        <StyledIcon
          checked={isChecked()}
          disabled={props.disabled}
          labelPosition={props.labelPosition}
          label={props.label}
        />
        {lableAfter}
      </>
    </StyledLabel>
  )
}

export default Radio
