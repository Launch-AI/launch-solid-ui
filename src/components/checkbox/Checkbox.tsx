import { createSignal } from 'solid-js'

import StyledCheckbox from './StyledCheckbox'
import StyledHiddenCheckbox from './StyledHiddenCheckbox'
import StyledLabel from './StyledLabel'

export type CheckboxProps = {
  label?: string
  checked?: boolean
  indeterminate?: boolean
  disabled?: boolean
  onChange?: (checked: boolean) => void
}

function Checkbox(props: CheckboxProps) {
  const { checked, indeterminate, disabled, onChange } = props
  const [isChecked, setIsChecked] = createSignal(checked || false)

  const handleChange = (ev: Event) => {
    if (disabled) return
    const newChecked = (ev.target as HTMLInputElement).checked
    setIsChecked(newChecked)
    onChange && onChange(newChecked)
  }

  return (
    <StyledLabel>
      <StyledHiddenCheckbox
        type="checkbox"
        checked={isChecked()}
        disabled={disabled}
        onChange={handleChange}
      />
      <StyledCheckbox
        checked={isChecked()}
        indeterminate={indeterminate}
        disabled={disabled}
      />
    </StyledLabel>
  )
}

export default Checkbox
