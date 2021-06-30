import { For } from 'solid-js'

import Heading, { HeadingProps } from './Heading'

export const HeadingLight: Story<HeadingProps> = (args) => (
  <For each={new Array(6)}>
    {(_, index) => (
      <div style={{ 'margin-bottom': '24px' }}>
        <Heading
          level={((index() + 1) as HeadingProps['level'])!}
          weight="light"
        >
          Heading {index() + 1}
        </Heading>
      </div>
    )}
  </For>
)

export const HeadingNormal: Story<HeadingProps> = (args) => (
  <For each={new Array(6)}>
    {(_, index) => (
      <div style={{ 'margin-bottom': '24px' }}>
        <Heading
          level={((index() + 1) as HeadingProps['level'])!}
          weight="normal"
        >
          Heading {index() + 1}
        </Heading>
      </div>
    )}
  </For>
)

export const HeadingMedium: Story<HeadingProps> = (args) => (
  <For each={new Array(6)}>
    {(_, index) => (
      <div style={{ 'margin-bottom': '24px' }}>
        <Heading
          level={((index() + 1) as HeadingProps['level'])!}
          weight="medium"
        >
          Heading {index() + 1}
        </Heading>
      </div>
    )}
  </For>
)

export const HeadingBold: Story<HeadingProps> = (args) => (
  <For each={new Array(6)}>
    {(_, index) => (
      <div style={{ 'margin-bottom': '24px' }}>
        <Heading
          level={((index() + 1) as HeadingProps['level'])!}
          weight="bold"
        >
          Heading {index() + 1}
        </Heading>
      </div>
    )}
  </For>
)

export default {
  title: 'Heading',
  component: Heading,
  argTypes: {},
}
