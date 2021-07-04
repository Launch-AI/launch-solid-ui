import { Component, createComputed, createSignal, For } from 'solid-js'

import Radio from './Radio'
import StyledRadioGroup from './StyledRadioGroup'

type Option = {
  label?: string
  value?: string
  disabled?: boolean
}

export type RadioGroupProps = {
  options: Option[]
  value?: string
  inline?: boolean
  disabled?: boolean
  onChange?: (checked: boolean) => void
}

const RadioGroup: Component<RadioGroupProps> = (props) => {
  const [value, setValue] = createSignal('')

  createComputed(() => {
    if (props.value !== null && props.value !== undefined) {
      setValue(props.value)
    }
  })

  const handleChange = (value: string) => {
    setValue(value)
  }

  const renderGroup = (
    <For each={props.options}>
      {(option) => (
        <Radio
          checked={option.value === value()}
          onChange={() => handleChange(option.value!)}
          disabled={props.disabled}
          label={option.label}
        />
      )}
    </For>
  )

  return (
    <StyledRadioGroup inline={props.inline}>{renderGroup}</StyledRadioGroup>
  )
}

export default RadioGroup
