import { createEffect, createSignal } from 'solid-js'

import StyledCheckbox from './StyledCheckbox'
import StyledHiddenCheckbox from './StyledHiddenCheckbox'
import StyledLabel from './StyledLabel'

export type CheckboxProps = {
  block?: boolean
  label?: string
  checked?: boolean
  indeterminate?: boolean
  disabled?: boolean
  onChange?: (checked: boolean) => void
}

function Checkbox(props: CheckboxProps) {
  const [isChecked, setIsChecked] = createSignal(props.checked || false)

  createEffect(() => {
    if (props.checked != null) {
      setIsChecked(props.checked)
    }
  })

  const handleChange = (ev: Event) => {
    if (props.disabled) return
    const newChecked = (ev.target as HTMLInputElement).checked
    setIsChecked(newChecked)
    props.onChange && props.onChange(newChecked)
  }

  return (
    <StyledLabel block={props.block}>
      <StyledHiddenCheckbox
        type="checkbox"
        checked={isChecked()}
        disabled={props.disabled}
        onChange={handleChange}
      />
      <StyledCheckbox
        checked={isChecked()}
        indeterminate={props.indeterminate}
        disabled={props.disabled}
      />
    </StyledLabel>
  )
}

export default Checkbox
