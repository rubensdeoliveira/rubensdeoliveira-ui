import { Menu, Transition } from '@headlessui/react'
import { ComponentType, Fragment, ReactElement } from 'react'
import { IconBaseProps } from 'react-icons'

type MenuItem = {
  label: string
  labelClassName?: string
  icon?: ComponentType<IconBaseProps>
  iconClassName?: string
  buttonClassName?: string
  buttonActiveClassName?: string
  onClick?: () => void
}

export type DropdownMenuProps = {
  triggerElement: ReactElement
  primaryMenuItems: MenuItem[]
  secondaryMenuItems: MenuItem[]
  menuItemsClassName?: string
}

export function DropdownMenu({
  triggerElement,
  primaryMenuItems,
  menuItemsClassName,
  secondaryMenuItems,
}: DropdownMenuProps) {
  return (
    <div className="rdoui-w-56 rdoui-text-right">
      <Menu
        as="div"
        className="rdoui-relative rdoui-inline-block rdoui-text-left"
      >
        <div>
          <Menu.Button className="rdoui-inline-flex rdoui-w-full rdoui-justify-center rdoui-bg-opacity-20 focus:rdoui-outline-none">
            {triggerElement}
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
            className={`${menuItemsClassName} rdoui-absolute rdoui-right-0 rdoui-mt-2 rdoui-w-56 rdoui-origin-top-right rdoui-shadow-lg focus:rdoui-outline-none`}
          >
            <div className="rdoui-px-1 rdoui-py-1">
              {primaryMenuItems.map(
                ({
                  icon: Icon,
                  label,
                  labelClassName,
                  iconClassName,
                  buttonActiveClassName,
                  buttonClassName,
                  onClick,
                }) => (
                  <Menu.Item key={label}>
                    {({ active }) => (
                      <button
                        onClick={() => {
                          if (onClick) {
                            onClick()
                          }
                        }}
                        className={`${
                          active && buttonActiveClassName
                        } ${buttonClassName} rdoui-group rdoui-flex rdoui-w-full rdoui-items-center rdoui-p-3`}
                      >
                        {Icon && <Icon className={iconClassName} />}
                        <span className={labelClassName}>{label}</span>
                      </button>
                    )}
                  </Menu.Item>
                ),
              )}
            </div>
            {secondaryMenuItems && (
              <div className="rdoui-px-1 rdoui-py-1">
                {secondaryMenuItems.map(
                  ({
                    icon: Icon,
                    label,
                    labelClassName,
                    iconClassName,
                    buttonActiveClassName,
                    buttonClassName,
                    onClick,
                  }) => (
                    <Menu.Item key={label}>
                      {({ active }) => (
                        <button
                          onClick={() => {
                            if (onClick) {
                              onClick()
                            }
                          }}
                          className={`${
                            active && buttonActiveClassName
                          } ${buttonClassName} rdoui-group rdoui-flex rdoui-w-full rdoui-items-center rdoui-p-3`}
                        >
                          {Icon && <Icon className={iconClassName} />}
                          <span className={labelClassName}>{label}</span>
                        </button>
                      )}
                    </Menu.Item>
                  ),
                )}
              </div>
            )}
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}
