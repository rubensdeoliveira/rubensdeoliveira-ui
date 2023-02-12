import React, { ReactNode, useCallback, useMemo } from 'react'
import { Icon } from '../../icon'

export type NavbarMenuItemType = {
  liChildren: React.ReactElement
  isActive: boolean
}

export type NavbarFixedItemType = {
  liChildren: React.ReactElement
}

export type ResponsiveNavbarModel = {
  navbarMenuItems: NavbarMenuItemType[]
  navbarFixedItems: NavbarFixedItemType[]
  navbarLogo: React.ReactElement
  children: ReactNode
  className?: string
}

export function ResponsiveNavbar({
  children,
  navbarLogo,
  navbarMenuItems,
  navbarFixedItems,
  className,
}: ResponsiveNavbarModel) {
  const renderNavbarItem = useCallback(
    (liChildren: React.ReactElement, id: number, isActive?: boolean) => (
      <li
        key={id}
        className={`${isActive ? 'dark:bg-gray-800 dark:text-gray-50' : ''}`}
      >
        {liChildren}
      </li>
    ),
    [],
  )

  const renderNavbarMenuItems = useMemo(
    () =>
      navbarMenuItems.map(({ liChildren, isActive }, index) =>
        renderNavbarItem(liChildren, index, isActive),
      ),
    [navbarMenuItems, renderNavbarItem],
  )

  const renderNavbarFixedItems = useMemo(
    () =>
      navbarFixedItems.map(({ liChildren }, index) =>
        renderNavbarItem(liChildren, index),
      ),
    [navbarFixedItems, renderNavbarItem],
  )

  return (
    <div className="drawer ">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        <div className={`w-full navbar ${className || ''}`}>
          <div className="w-full max-w-[1200px] mx-auto flex justify-between p-0">
            <div className="flex items-center">
              <div className="flex-none md:hidden mr-2">
                <label
                  htmlFor="my-drawer-3"
                  className="btn btn-square btn-ghost"
                >
                  <Icon name="Bars3BottomLeftIcon" size={24} />
                </label>
              </div>
              <div>{navbarLogo}</div>
            </div>
            <div className="order-1">
              <ul className="">{renderNavbarFixedItems}</ul>
            </div>
            <div className="flex-none hidden md:block order-0">
              <ul className="menu menu-horizontal">{renderNavbarMenuItems}</ul>
            </div>
          </div>
        </div>
        {children}
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 bg-base-100">{renderNavbarMenuItems}</ul>
      </div>
    </div>
  )
}
