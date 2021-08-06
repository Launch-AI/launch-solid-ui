import {
  Component,
  createSignal,
  createComputed,
  For,
  JSX,
  onMount,
  Show,
} from 'solid-js'

import Option from './Option'
import StyledLabel from './StyledLabel'
import StyledSelect from './StyledSelect'

type OptionProps = {
  label: string
  value: string | number
}

export type SelectProps = {
  label?: JSX.Element
  value?: string
  placeholder?: string
  onChange?: (e: Event) => void
  options?: OptionProps[]
  labelFloat?: boolean
}

const Select: Component<SelectProps> = (props) => {
  const [isVisible, setIsVisible] = createSignal(false)
  const [val, setVal] = createSignal(props.value || props.placeholder)
  const [isFocused, setIsFocused] = createSignal(false)
  const [isActive, setIsActive] = createSignal(false)

  createComputed(() => {
    if (props.value) {
      setVal(props.value)
    }
  })

  const closeOnOutsideClick = (e: any) => {
    const value = e?.target?.value
    if (!val() && !value) {
      setIsFocused(false)
    }
    if (isVisible()) {
      setIsVisible(false)
    }
    if (!e.target.matches('.select *')) {
      setIsVisible(false)
    }
  }

  const getLabel = () => {
    return props.options?.filter(
      (item: OptionProps) => item.value === val()
    )?.[0]?.label
  }

  const handleDropdownChange = (e: Event) => {
    const target = e.target as HTMLInputElement
    const value = target.value || target.innerText
    setVal(value)
    props.onChange?.(e)
    setIsVisible(false)
    setIsActive(false)
    if (!value) {
      setIsFocused(false)
    }
  }

  onMount(() => {
    document.addEventListener('click', closeOnOutsideClick, true)
    ;() => {
      document.removeEventListener('click', closeOnOutsideClick, true)
    }
  })

  return (
    <StyledSelect focused={isFocused()} active={isActive()}>
      <div className="select--wrapper">
        <Show when={props.label}>
          <StyledLabel
            focused={isFocused()}
            labelFloat={props.labelFloat}
            className="select--label"
          >
            {props.label}
          </StyledLabel>
        </Show>
        <div
          className="select"
          onClick={() => {
            setIsVisible(!isVisible())
            setIsFocused(true)
            setIsActive(true)
          }}
        >
          {getLabel()}
        </div>
      </div>
      <Show when={isVisible()}>
        <div className="select--dropdown" onClick={handleDropdownChange}>
          <Show when={props.options} fallback={props.children}>
            <For each={props.options!}>
              {(option: OptionProps) => (
                <Option value={option.value} active={option.value === val()}>
                  {option.label}
                </Option>
              )}
            </For>
          </Show>
        </div>
      </Show>
    </StyledSelect>
  )
}

export default Select
