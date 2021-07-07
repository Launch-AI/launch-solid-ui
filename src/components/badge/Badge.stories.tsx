import { Badge, BadgeProps } from '.'
import EmailIcon from '../../icons/EmailIcon'
import { Avatar } from '../avatar'

const BadgeTemplate: Story<BadgeProps> = (args) => <Badge {...args} />

export const Normal = BadgeTemplate.bind({})
Normal.args = {
  count: 1,
  badgeColor: 'green',
  children: (
    <Avatar type="filled" shape="rounded" color="purple" shadow={false} />
  ),
  offsetX: 9,
  offsetY: 7,
}

export const Square = BadgeTemplate.bind({})
Square.args = {
  count: 1,
  badgeColor: 'danger',
  children: (
    <Avatar type="filled" shape="rounded" color="purple" shadow={false} />
  ),
  offsetX: 9,
  offsetY: 7,
}

export const Dot = BadgeTemplate.bind({})
Dot.args = {
  badgeColor: 'green',
  children: (
    <Avatar type="filled" shape="rounded" color="purple" shadow={false} />
  ),
  offsetX: 2,
  offsetY: 6,
}

export const BadgePlacement = BadgeTemplate.bind({})
BadgePlacement.args = {
  badgeColor: 'green',
  badgePlacement: 'top-left',
  children: (
    <Avatar type="filled" shape="rounded" color="purple" shadow={false} />
  ),
  offsetX: 7,
  offsetY: 7,
}

export const CountLimit = BadgeTemplate.bind({})
CountLimit.args = {
  count: 999,
  badgeColor: 'danger',
  children: (
    <Avatar type="filled" shape="rounded" color="purple" shadow={false} />
  ),
  offsetX: 20,
  offsetY: 7,
}

export const Icon = BadgeTemplate.bind({})
Icon.args = {
  count: 1,
  badgeColor: 'danger',
  children: <EmailIcon />,
  offsetX: 14,
  offsetY: 1,
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
