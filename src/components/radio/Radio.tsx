import { Component, createSignal, Show } from 'solid-js'

import StyledIcon from './StyledIcon'
import StyledInput from './StyledInput'
import StyledLabel from './StyledRadio'

export type IRadioProps = {
  label?: any
  labelPosition?: 'right' | 'left'
  checked?: boolean
  indeterminate?: boolean
  disabled?: boolean
  className?: string
  onChange?: (checked: boolean) => void
}

const Radio: Component<IRadioProps> = (props) => {
  const [isChecked, setIsChecked] = createSignal(props.checked || false)

  const handleChange = (e: any) => {
    if (props.disabled) return
    const newChecked = (e.target as HTMLInputElement).checked
    setIsChecked(newChecked)
    props.onChange && props.onChange(newChecked)
  }

  const renderLabel = (isVisible: boolean) => (
    <Show when={isVisible}>{props.label}</Show>
  )

  return (
    <StyledLabel>
      {renderLabel(props.label && props.labelPosition !== 'right')}
      <StyledInput
        type="radio"
        onChange={handleChange}
        checked={isChecked()}
        disabled={props.disabled}
      />
      <StyledIcon checked={isChecked()} disabled={props.disabled} />
      {renderLabel(props.label && props.labelPosition === 'right')}
    </StyledLabel>
  )
}

export default Radio
