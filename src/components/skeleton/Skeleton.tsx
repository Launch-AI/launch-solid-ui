import { Component, For } from 'solid-js'

import withDefaults from '../../utils/with-defaults'
import StyledContainer from './StyledContainer'
import StyledSkeletonRow from './StyledSkeletonRow'

export type SkeletonProps = {
  class?: string
  rounded?: boolean
  rows?: number
}

const Skeleton: Component<SkeletonProps> = (props) => {
  return (
    <>
      <style>
        {`
          @keyframes skeleton-loading {
            0% {
              background-position: 100% 50%
            }
            to {
              background-position: 0 50%
            }
          }
        `}
      </style>
      <StyledContainer class={props.class}>
        <For each={new Array(props.rows)}>
          {() => <StyledSkeletonRow {...props} />}
        </For>
      </StyledContainer>
    </>
  )
}

export default withDefaults(Skeleton, {
  rounded: false,
  rows: 3,
})
