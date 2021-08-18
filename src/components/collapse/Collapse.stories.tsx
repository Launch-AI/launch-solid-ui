import Collapse from './Collapse'

const CollapseTemplate: Story = (args) => <Collapse {...args} />

export const Default = CollapseTemplate.bind({})
Default.args = {
  options: [
    {
      title: 'Collapse One',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam culpa natus molestias est aliquam tempora accusamus incidunt, voluptate, vero explicabo cumque cupiditate? Voluptate totam ea minima reprehenderit omnis porro officiis?',
    },
    {
      title: 'Collapse Two',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam culpa natus molestias est aliquam tempora accusamus incidunt, voluptate, vero explicabo cumque cupiditate? Voluptate totam ea minima reprehenderit omnis porro officiis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam culpa natus molestias est aliquam tempora accusamus incidunt, voluptate, vero explicabo cumque cupiditate? Voluptate totam ea minima reprehenderit omnis porro officiis?',
    },
  ],
}

export default {
  title: 'Collapse',
  component: Collapse,
  argTypes: {},
}
