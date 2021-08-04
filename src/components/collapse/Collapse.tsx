import { Component, createSignal, For, JSX } from 'solid-js'

import StyledCollapse from './StyledCollapse'
import StyledContainer from './StyledContainer'
import StyledContent from './StyledContent'
import StyledHeader from './StyledHeader'

type Option = {
  title: JSX.Element
  content: JSX.Element
}

export type CollapseProps = {
  options?: Option[]
}

const Collapse: Component<CollapseProps> = (props) => {
  const [activeItem, setActiveItem] = createSignal(-1)

  const handleToggle = (idx: number) => {
    idx === activeItem() ? setActiveItem(-1) : setActiveItem(idx)
  }

  return (
    <StyledCollapse>
      <For each={props.options!}>
        {(option, index) => (
          <StyledContainer>
            <StyledHeader
              isFirst={index() === 0}
              onClick={() => handleToggle(index())}
            >
              {option.title}
            </StyledHeader>
            <StyledContent isActive={activeItem() === index()}>
              {option.content}
            </StyledContent>
          </StyledContainer>
        )}
      </For>
    </StyledCollapse>
  )
}

export default Collapse
