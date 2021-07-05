import { Tag, TagProps } from '.'
import CancelIcon from '../../icons/CancelIcon'
import CheckedIcon from '../../icons/CheckedIcon'

const TabsTemplate: Story<TagProps> = (args) => <Tag {...args}>Enabled</Tag>

export const Normal = TabsTemplate.bind({})
Normal.args = {
  color: 'primary',
}

export const Disabled = TabsTemplate.bind({})
Disabled.args = {
  disabled: true,
}

export const WithIconBefore = TabsTemplate.bind({})
WithIconBefore.args = {
  color: 'primary',
  iconBefore: <CancelIcon />,
}

export const withIconAfter = TabsTemplate.bind({})
withIconAfter.args = {
  color: 'primary',
  iconAfter: <CancelIcon />,
}

export const Small = TabsTemplate.bind({})
Small.args = {
  color: 'primary',
  size: 'small',
}

export default {
  title: 'Tag',
  component: Tag,
  argTypes: {
    color: {
      options: [
        'default',
        'grey',
        'purple',
        'green',
        'teal',
        'primary',
        'secondary',
      ],
      control: { type: 'select' },
    },
  },
}
