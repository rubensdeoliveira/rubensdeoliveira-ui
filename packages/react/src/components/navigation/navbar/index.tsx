import { ReactElement, useState } from 'react'

export type NavbarNavigationItemModel = {
  liChildren: ReactElement
}

type NavbarStyle = {
  bar?: string
  mobileMenu?: string
  container?: string
}

export type NavbarModel = {
  logo: ReactElement
  navigationItems: NavbarNavigationItemModel[]
  ctaButton?: ReactElement
  style?: NavbarStyle
}

export function Navbar({
  logo,
  navigationItems,
  ctaButton,
  style,
}: NavbarModel) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <nav
        className={`${
          style?.bar || ''
        } top-0 left-0 z-50 w-full border-b border-gray-200 dark:border-gray-700`}
      >
        <div className={`${style?.container || ''}`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start">
              <button
                onClick={() => setIsOpen((oldValue) => !oldValue)}
                data-drawer-target="logo-sidebar"
                data-drawer-toggle="logo-sidebar"
                aria-controls="logo-sidebar"
                type="button"
                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              >
                <span className="sr-only">Open sidebar</span>
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clipRule="evenodd"
                    fillRule="evenodd"
                    d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                  ></path>
                </svg>
              </button>
              {logo}
            </div>
            <ul className="hidden justify-center items-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              {navigationItems.map(({ liChildren }, idx) => {
                return <li key={idx}>{liChildren}</li>
              })}
            </ul>
            {ctaButton}
          </div>
        </div>
      </nav>

      <aside
        id="logo-sidebar"
        className={`${style?.mobileMenu || ''} ${
          isOpen ? 'translate-none' : '-translate-x-full'
        } fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform border-r border-gray-200 md:translate-x-0 md:hidden dark:border-gray-700`}
        aria-label="Sidebar"
      >
        <div className={`h-full px-3 pb-4 overflow-y-auto`}>
          <ul className="space-y-2">
            {navigationItems.map(({ liChildren }, idx) => {
              return <li key={idx}>{liChildren}</li>
            })}
          </ul>
        </div>
      </aside>
    </>
  )
}
