import { Badge, BadgeProps } from '.'
import EmailIcon from '../../icons/EmailIcon'
import UserIcon from '../../icons/UserIcon'

const BadgeTemplate: Story<BadgeProps> = (args) => <Badge {...args} />

export const Normal = BadgeTemplate.bind({})
Normal.args = {
  count: 1,
  badgeColor: 'green',
  children: <UserIcon />,
  shape: 'rounded',
}

export const Square = BadgeTemplate.bind({})
Square.args = {
  count: 1,
  children: <UserIcon />,
  badgeColor: 'danger',
  shape: 'square',
}

export const Dot = BadgeTemplate.bind({})
Dot.args = {
  children: <UserIcon />,
  badgeColor: 'green',
  shape: 'rounded',
}

export const BadgePlacement = BadgeTemplate.bind({})
BadgePlacement.args = {
  children: <UserIcon />,
  badgeColor: 'green',
  badgePlacement: 'top-left',
  shape: 'square',
}

export const CountLimit = BadgeTemplate.bind({})
CountLimit.args = {
  count: 999,
  badgeColor: 'danger',
  children: <UserIcon />,
  shape: 'rounded',
}

export const Icon = BadgeTemplate.bind({})
Icon.args = {
  count: 1,
  badgeColor: 'danger',
  children: <EmailIcon />,
  shape: 'rounded',
  badgeType: 'icon',
}

export default {
  title: 'Badge',
  component: Badge,
  argTypes: {
    badgeColor: {
      options: [
        'default',
        'primary',
        'secondary',
        'green',
        'teal',
        'grey',
        'purple',
      ],
      control: { type: 'select' },
    },
    color: {
      options: [
        'default',
        'primary',
        'secondary',
        'green',
        'teal',
        'grey',
        'purple',
      ],
      control: { type: 'select' },
    },
    badgePlacement: {
      options: ['top-left', 'top-right', 'bottom-left', 'bottom-right'],
      control: { type: 'select' },
    },
  },
}
