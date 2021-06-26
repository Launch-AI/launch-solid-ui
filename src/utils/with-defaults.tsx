import merge from 'lodash/merge'
import { Component } from 'solid-js'

export default function withDefaults<P = {}>(
  Comp: Component<P>,
  defaultProps: Partial<P>
) {
  return (props: any) => <Comp {...merge(defaultProps, props)} />
}
