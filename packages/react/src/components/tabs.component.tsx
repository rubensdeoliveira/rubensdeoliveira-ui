import { ReactElement } from 'react'
import { Tab } from '@headlessui/react'
import { cva } from 'class-variance-authority'

type TabContent = {
  children: ReactElement
  tabTitle: string
}

export type TabsProps = {
  tabContents: TabContent[]
  tabListContainerClassName?: string
  tabContainerClassName?: ({ selected }: { selected: boolean }) => string
  tabContentContainerClassName?: string
}

const tabListContainerStyles = cva('rdoui-flex')
const tabContentContainerStyles = cva('focus:rdoui-outline-none')

export function Tabs({
  tabContents,
  tabContainerClassName,
  tabContentContainerClassName,
  tabListContainerClassName,
}: TabsProps) {
  return (
    <div className="rdoui-w-full rdoui-max-w-md rdoui-px-2 rdoui-py-16 sm:rdoui-px-0">
      <Tab.Group>
        <Tab.List
          className={tabListContainerStyles({
            className: tabListContainerClassName,
          })}
        >
          {tabContents.map((tabContent, index) => (
            <Tab key={index} className={tabContainerClassName}>
              {tabContent.tabTitle}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="rdoui-mt-2">
          {tabContents.map((tabContent, index) => (
            <Tab.Panel
              key={index}
              className={tabContentContainerStyles({
                className: tabContentContainerClassName,
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
