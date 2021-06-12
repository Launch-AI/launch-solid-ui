import type {
  Args as DefaultArgs,
  Annotations,
  BaseMeta,
  BaseStory,
} from '@storybook/addons'
import type { Meta, Args } from '@storybook/html'
import type { Component } from 'solid-js'

declare global {
  declare type HTMLReturnType = any

  /**
   * Story function that represents a component example.
   *
   * @see [Named Story exports](https://storybook.js.org/docs/formats/component-story-format/#named-story-exports)
   */
  declare type Story<Args = DefaultArgs> = BaseStory<Args, HTMLReturnType> &
    Annotations<Args, HTMLReturnType>
}
