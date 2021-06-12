import { render } from 'solid-js/web'
import { Button } from './Button'

it('renders without crashing', () => {
  const div = document.createElement('div')
  const dispose = render(() => <Button>Hello, world!</Button>, div)
  console.log(div.innerHTML)
  div.textContent = ''
  dispose()
})
