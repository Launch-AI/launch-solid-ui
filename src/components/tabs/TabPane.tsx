import { Component, createMemo, JSX } from 'solid-js'

export type TabPaneProps = {
  tab: JSX.Element
  key: string
  children: JSX.Element
}

const TabPane = (((props: TabPaneProps) => {
  return createMemo(() => ({
    tab: props.tab,
    key: props.key,
    children: props.children,
  }))
}) as unknown) as Component<TabPaneProps>

export default TabPane
