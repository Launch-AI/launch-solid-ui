import { For } from 'solid-js'

import Text, { TextProps } from './Text'

export const Normal: Story<TextProps> = (args) => (
  <For each={['light', 'normal', 'medium', 'bold']}>
    {(weight) => (
      <div style={{ 'margin-bottom': '24px' }}>
        <Text weight={weight as TextProps['weight']} type="normal">
          Text {weight}
        </Text>
      </div>
    )}
  </For>
)

export const Large: Story<TextProps> = (args) => (
  <For each={['light', 'normal', 'medium', 'bold']}>
    {(weight) => (
      <div style={{ 'margin-bottom': '24px' }}>
        <Text weight={weight as TextProps['weight']} type="large">
          Text {weight}
        </Text>
      </div>
    )}
  </For>
)

export const Caption: Story<TextProps> = (args) => (
  <For each={['light', 'normal', 'medium', 'bold']}>
    {(weight) => (
      <div style={{ 'margin-bottom': '24px' }}>
        <Text weight={weight as TextProps['weight']} type="caption">
          Text {weight}
        </Text>
      </div>
    )}
  </For>
)

export const Overline: Story<TextProps> = (args) => (
  <For each={['light', 'normal', 'medium', 'bold']}>
    {(weight) => (
      <div style={{ 'margin-bottom': '24px' }}>
        <Text weight={weight as TextProps['weight']} type="overline">
          Text {weight}
        </Text>
      </div>
    )}
  </For>
)

export default {
  title: 'Text',
  component: Text,
  argTypes: {},
}
