import Skeleton, { SkeletonProps } from './Skeleton'

const SkeletonTemplate: Story<SkeletonProps> = (args) => (
  <>
    <Skeleton {...args} />
  </>
)

export const Normal = SkeletonTemplate.bind({})
Normal.args = {
  rounded: false,
}

export const Rounded = SkeletonTemplate.bind({})
Rounded.args = {
  rounded: true,
}

export default {
  title: 'Skeleton',
  component: Skeleton,
  argTypes: {},
}
