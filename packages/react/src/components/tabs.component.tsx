import { ReactElement } from 'react'
import { Tab } from '@headlessui/react'
import { cva } from 'class-variance-authority'

type TabContent = {
  children: ReactElement
  tabTitle: string
}

export type TabsProps = {
  tabContents: TabContent[]
  tabListClassName?: string
  tabClassName?: ({ selected }: { selected: boolean }) => string
  tabPanelsClassName?: string
  tabPanelClassName?: string
}

const tabListStyles = cva('rdoui-flex')
const tabPanelsStyles = cva('')
const tabPanelStyles = cva('rdoui-outline-none')

export function Tabs({
  tabContents,
  tabListClassName,
  tabPanelsClassName,
  tabPanelClassName,
  tabClassName,
}: TabsProps) {
  return (
    <div className="rdoui-w-full">
      <Tab.Group>
        <Tab.List
          className={tabListStyles({
            className: tabListClassName,
          })}
        >
          {tabContents.map((tabContent, index) => (
            <Tab key={index} className={tabClassName}>
              {tabContent.tabTitle}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels
          className={tabPanelsStyles({ className: tabPanelsClassName })}
        >
          {tabContents.map((tabContent, index) => (
            <Tab.Panel
              key={index}
              className={tabPanelStyles({
                className: tabPanelClassName,
              })}
            >
              {tabContent.children}
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}
