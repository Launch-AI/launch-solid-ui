// const { addDecorator, configure } = require('@storybook/html')
// const { createRoot } = require('solid-js')

// automatically import all files ending in *.stories.js
// configure(require.context('../stories', true, /\.stories\.js$/), module)

// addDecorator((story) => {
//   return createRoot(() => story())
// })

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
}
