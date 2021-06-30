import AddIcon from '../../icons/AddIcon'
import TabPane from './TabPane'
import Tabs, { TabsProps } from './Tabs'

const TabsTemplate: Story<TabsProps> = (args) => (
  <Tabs {...args}>
    <TabPane
      tab={
        <>
          Tab 1 <AddIcon />
        </>
      }
      key="tab1"
    >
      This is tab content 1 <AddIcon />
    </TabPane>
    <TabPane tab="Tab 2" key="tab2">
      This is tab content 2
    </TabPane>
    <TabPane tab="Tab 3" key="tab3">
      This is tab content 3
    </TabPane>
  </Tabs>
)

export const Normal = TabsTemplate.bind({})
Normal.args = {
  activeKey: 'tab1',
}

export default {
  title: 'Tabs',
  component: Tabs,
  argTypes: {},
}
