import { Button, ButtonProps } from './Button'

const TypeTemplate: Story<ButtonProps> = (args) => (
  <Button {...args}>Button</Button>
)

export const Primary = TypeTemplate.bind({})
Primary.args = { type: 'primary' }
Primary.parameters = {
  backgrounds: {
    values: [
      { name: 'red', value: '#f00' },
      { name: 'green', value: '#0f0' },
    ],
  },
}

export const Secondary = TypeTemplate.bind({})
Secondary.args = { type: 'secondary' }

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    type: {
      options: ['primary', 'secondary'],
      control: { type: 'select' },
    },
  },
}
