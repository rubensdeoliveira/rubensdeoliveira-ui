import React, { ReactNode, useCallback, useMemo, useState } from 'react'

type NavbarItemType = {
  label: string
  liChildren: React.ReactElement
  isActive: boolean
  onClick?: () => void
}

type User = {
  name?: string | null | undefined
  email?: string | null | undefined
  image?: string | null | undefined
}

export type FixedNavbarModel = {
  navbarMainItems: NavbarItemType[]
  navbarSecondaryItems: NavbarItemType[]
  children: ReactNode
  user: User
}

export function FixedNavbar({
  children,
  user,
  navbarMainItems,
  navbarSecondaryItems,
}: FixedNavbarModel) {
  const [isImageError, setIsImageError] = useState<boolean>(false)

  const renderName = useMemo(() => {
    const splittedName = user?.name?.split(' ')
    if (splittedName && splittedName.length > 2) {
      return `${splittedName[0]} ${splittedName[1]}`
    }
    return user?.name
  }, [user?.name])

  const renderNavbarItem = useCallback(
    (label: string, liChildren: React.ReactElement, isActive: boolean) => (
      <li
        className={`${isActive ? 'dark:bg-gray-800 dark:text-gray-50' : ''}`}
        key={label}
      >
        {liChildren}
      </li>
    ),
    [],
  )

  return (
    <>
      <div className="navbar justify-between bg-base-100">
        <label
          htmlFor="my-drawer-2"
          className="btn btn-square btn-ghost drawer-button lg:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-6 h-6 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </label>
        <div>logo</div>
        <div className="flex-none">dark mode</div>
      </div>
      <div className="drawer-mobile drawer">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col gap-4 p-8">{children}</div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <div className="h-full w-60 space-y-2 p-3 dark:bg-gray-900 dark:text-gray-100">
            <div className="flex items-center space-x-4 p-2">
              {user?.image && !isImageError ? (
                <img
                  src={user?.image}
                  alt={user?.name ?? 'Foto do usuaário'}
                  className="h-12 w-12 rounded-full dark:bg-gray-500"
                  onError={() => setIsImageError(true)}
                />
              ) : (
                <div className="placeholder avatar">
                  <div className="w-12 rounded-full bg-neutral-focus text-neutral-content">
                    <span>{user?.name ? user?.name.charAt(0) : 'A'}</span>
                  </div>
                </div>
              )}
              <div>
                <h2 className="text-lg font-semibold">{renderName}</h2>
                <span className="flex items-center space-x-1">
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="text-xs hover:underline dark:text-gray-400"
                  >
                    View profile
                  </a>
                </span>
              </div>
            </div>
            <div className="divide-y divide-gray-700">
              <ul className="space-y-1 pt-2 pb-4 text-sm">
                {navbarMainItems.map(({ label, liChildren, isActive }) =>
                  renderNavbarItem(label, liChildren, isActive),
                )}
              </ul>
              <ul className="space-y-1 pt-4 pb-2 text-sm">
                {navbarSecondaryItems.map(({ label, liChildren, isActive }) =>
                  renderNavbarItem(label, liChildren, isActive),
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
