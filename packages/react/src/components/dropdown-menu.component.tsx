import { Menu, Transition } from '@headlessui/react'
import { Fragment, ReactElement } from 'react'
import { Button, ButtonProps } from './button.component'
import { cva } from 'class-variance-authority'

type ItemProps = {
  active: boolean
  disabled: boolean
}

export type DropdownMenuProps = {
  openButton: ButtonProps
  menuItems: Array<(item: ItemProps) => ReactElement>
  containerClassName?: string
  menuItemsContainerClassName?: string
}

const containerStyles = cva('rdoui-relative rdoui-inline-block rdoui-text-left')
const menuItemsContainerStyles = cva(
  'rdoui-absolute rdoui-right-0 rdoui-mt-2 rdoui-origin-top-right rdoui-divide-y rdoui-divide-gray-100 rdoui-rounded-md rdoui-shadow-lg rdoui-ring-1 rdoui-ring-opacity-5 rdoui-focus:outline-none',
)

export function DropdownMenu({
  openButton,
  menuItems,
  containerClassName,
  menuItemsContainerClassName,
}: DropdownMenuProps) {
  return (
    <Menu
      as="div"
      className={containerStyles({ className: containerClassName })}
    >
      <div>
        <Menu.Button>
          <Button {...openButton} />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items
          className={menuItemsContainerStyles({
            className: menuItemsContainerClassName,
          })}
        >
          <div className="rdoui-px-1 rdoui-py-1 ">
            {menuItems.map((menuItem, index) => (
              <Menu.Item key={index}>
                {(item: ItemProps) => menuItem(item)}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
