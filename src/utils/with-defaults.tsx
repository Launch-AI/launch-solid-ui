import { Component, mergeProps } from 'solid-js'

export default function withDefaults<P = {}>(
  Comp: Component<P>,
  defaultProps: Partial<P>
) {
  return ((props: any) => (
    <Comp {...mergeProps(defaultProps, props)} />
  )) as Component<P>
}
