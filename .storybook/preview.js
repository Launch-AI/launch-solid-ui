import { createRoot } from 'solid-js'
import { insert, template, createComponent } from 'solid-js/web'

export const decorators = [
  (Story) =>
    createRoot(() => {
      // Wrap the component in a <div> tag.
      const el = template(`<div></div>`, 2).cloneNode(true)
      insert(el, createComponent(Story, {}))
      return el
    }),
]
