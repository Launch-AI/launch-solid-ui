import {
  JSX,
  For,
  Show,
  createEffect,
  createSignal,
  createMemo,
  Accessor,
  Component,
} from 'solid-js'

import StyledTabs from './StyledTabs'
import Tab from './Tab'
import { default as TabPane, TabPaneProps } from './TabPane'

export type TabsProps = {
  class?: string
  activeKey?: string
  onChange?: (newKey: string) => void
}

const Tabs: Component<TabsProps> = (props) => {
  const [activeKey, setActiveKey] = createSignal(props.activeKey)
  const tabs = createMemo(() => {
    const children = (props.children as unknown) as Accessor<TabPaneProps>[]
    return (children || [])
      .filter((tab) => !!tab().key)
      .map((tab) => (
        <Tab
          active={tab().key === activeKey()}
          onClick={() => setActiveKey(tab().key)}
        >
          {tab().tab}
        </Tab>
      ))
  })

  createEffect(() => {
    setActiveKey(props.activeKey)
  })

  return (
    <div class={props.class}>
      <StyledTabs>
        <For each={tabs()}>{(tab) => tab}</For>
      </StyledTabs>
      <For
        each={((props.children as unknown) as Accessor<TabPaneProps>[]) || []}
      >
        {(tabPane) => (
          <Show when={tabPane().key === activeKey()}>{tabPane().children}</Show>
        )}
      </For>
    </div>
  )
}

export default Tabs
