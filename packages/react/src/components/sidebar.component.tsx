import { ReactNode, useState } from 'react'

export type SidebarProps = {
  logo?: ReactNode
  navigationItems?: ReactNode
  cta?: ReactNode
  wrapperClassName?: string
  mobileButtonClassName?: string
  mobileButtonType?: 'center' | 'left' | 'right' | 'center-secondary'
  showCtaOnMobile?: boolean
}

export function Sidebar({
  logo,
  navigationItems,
  cta,
  wrapperClassName,
  mobileButtonClassName,
  mobileButtonType,
  showCtaOnMobile = false,
}: SidebarProps) {
  return (
    <>
      <div className="rdoui-antialiased rdoui-bg-gray-50">
        <nav className="rdoui-bg-white rdoui-border-b rdoui-border-gray-200 rdoui-px-4 rdoui-py-2.5 rdoui-fixed rdoui-left-0 rdoui-right-0 rdoui-top-0 rdoui-z-50">
          <div className="rdoui-flex rdoui-flex-wrap rdoui-justify-between rdoui-items-center">
            <div className="rdoui-flex rdoui-justify-start rdoui-items-center">
              <button
                data-drawer-target="drawer-navigation"
                data-drawer-toggle="drawer-navigation"
                aria-controls="drawer-navigation"
                className="rdoui-p-2 rdoui-mr-2 rdoui-text-gray-600 rdoui-rounded-lg rdoui-cursor-pointer md:rdoui-hidden hover:rdoui-text-gray-900 hover:rdoui-bg-gray-100 focus:rdoui-bg-gray-100 focus:rdoui-ring-2 focus:rdoui-ring-gray-100"
              >
                <svg
                  aria-hidden="true"
                  className="rdoui-w-6 rdoui-h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <svg
                  aria-hidden="true"
                  className="rdoui-hidden rdoui-w-6 rdoui-h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="rdoui-sr-only">Toggle sidebar</span>
              </button>
              <a
                href="https://flowbite.com"
                className="rdoui-flex rdoui-items-center rdoui-justify-between rdoui-mr-4"
              >
                <img
                  src="https://flowbite.s3.amazonaws.com/logo.svg"
                  className="rdoui-mr-3 rdoui-h-8"
                  alt="Flowbite Logo"
                />
                <span className="rdoui-self-center rdoui-text-2xl rdoui-font-semibold rdoui-whitespace-nowrap">
                  Flowbite
                </span>
              </a>
            </div>
            <div className="rdoui-flex rdoui-items-center rdoui-lg:order-2">
              <button
                type="button"
                className="rdoui-flex rdoui-mx-3 rdoui-text-sm rdoui-bg-gray-800 rdoui-rounded-full md:rdoui-mr-0 focus:rdoui-ring-4 focus:rdoui-ring-gray-300"
                id="user-menu-button"
                aria-expanded="false"
                data-dropdown-toggle="dropdown"
              >
                <span className="rdoui-sr-only">Open user menu</span>
                <img
                  className="rdoui-w-8 rdoui-h-8 rdoui-rounded-full"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gough.png"
                  alt="user photo"
                />
              </button>
              <div
                className="rdoui-hidden rdoui-z-50 rdoui-my-4 rdoui-w-56 rdoui-text-base rdoui-list-none rdoui-bg-white rdoui-rounded rdoui-divide-y rdoui-divide-gray-100 rdoui-shadow"
                id="dropdown"
              >
                <div className="rdoui-py-3 rdoui-px-4">
                  <span className="rdoui-block rdoui-text-sm rdoui-font-semibold rdoui-text-gray-900">
                    Neil Sims
                  </span>
                  <span className="rdoui-block rdoui-text-sm rdoui-text-gray-900 rdoui-truncate">
                    name@flowbite.com
                  </span>
                </div>
                <ul
                  className="rdoui-py-1 rdoui-text-gray-700"
                  aria-labelledby="dropdown"
                >
                  <li>
                    <a
                      href="#"
                      className="rdoui-block rdoui-py-2 rdoui-px-4 rdoui-text-sm hover:rdoui-bg-gray-100"
                    >
                      My profile
                    </a>
                  </li>
                </ul>
                <ul
                  className="rdoui-py-1 rdoui-text-gray-700"
                  aria-labelledby="dropdown"
                >
                  <li>
                    <a
                      href="#"
                      className="rdoui-block rdoui-py-2 rdoui-px-4 rdoui-text-sm hover:rdoui-bg-gray-100"
                    >
                      Sign out
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
        <aside
          className="rdoui-fixed rdoui-top-0 rdoui-left-0 rdoui-z-40 rdoui-w-64 rdoui-h-screen rdoui-pt-14 rdoui-transition-transform rdoui--translate-x-full rdoui-bg-white rdoui-border-r rdoui-border-gray-200 md:rdoui-translate-x-0"
          aria-label="Sidenav"
          id="drawer-navigation"
        >
          <div className="rdoui-overflow-y-auto rdoui-py-5 rdoui-px-3 rdoui-h-full rdoui-bg-white">
            <ul className="rdoui-space-y-2">
              <li>
                <a
                  href="#"
                  className="rdoui-flex rdoui-items-center rdoui-p-2 rdoui-text-base rdoui-font-medium rdoui-text-gray-900 rdoui-rounded-lg hover:rdoui-bg-gray-100 rdoui-group"
                >
                  <svg
                    aria-hidden="true"
                    className="rdoui-w-6 rdoui-h-6 rdoui-text-gray-500 rdoui-transition rdoui-duration-75"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                    <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                  </svg>
                  <span className="rdoui-ml-3">Overview</span>
                </a>
              </li>
              <li>
                <button
                  type="button"
                  className="rdoui-flex rdoui-items-center rdoui-p-2 rdoui-w-full rdoui-text-base rdoui-font-medium rdoui-text-gray-900 rdoui-rounded-lg rdoui-transition rdoui-duration-75 rdoui-group hover:rdoui-bg-gray-100"
                  aria-controls="dropdown-pages"
                  data-collapse-toggle="dropdown-pages"
                >
                  <svg
                    aria-hidden="true"
                    className="rdoui-flex-shrink-0 rdoui-w-6 rdoui-h-6 rdoui-text-gray-500 rdoui-transition rdoui-duration-75 rdoui-group-hover:text-gray-900"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="rdoui-flex-1 rdoui-ml-3 rdoui-text-left rdoui-whitespace-nowrap">
                    Pages
                  </span>
                  <svg
                    aria-hidden="true"
                    className="rdoui-w-6 rdoui-h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
                <ul
                  id="dropdown-pages"
                  className="rdoui-hidden rdoui-py-2 rdoui-space-y-2"
                >
                  <li>
                    <a
                      href="#"
                      className="rdoui-flex rdoui-items-center rdoui-p-2 rdoui-pl-11 rdoui-w-full rdoui-text-base rdoui-font-medium rdoui-text-gray-900 rdoui-rounded-lg rdoui-transition rdoui-duration-75 rdoui-group hover:rdoui-bg-gray-100"
                    >
                      Settings
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="rdoui-flex rdoui-items-center rdoui-p-2 rdoui-pl-11 rdoui-w-full rdoui-text-base rdoui-font-medium rdoui-text-gray-900 rdoui-rounded-lg rdoui-transition rdoui-duration-75 rdoui-group hover:rdoui-bg-gray-100"
                    >
                      Kanban
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="rdoui-flex rdoui-items-center rdoui-p-2 rdoui-pl-11 rdoui-w-full rdoui-text-base rdoui-font-medium rdoui-text-gray-900 rdoui-rounded-lg rdoui-transition rdoui-duration-75 rdoui-group hover:rdoui-bg-gray-100"
                    >
                      Calendar
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <ul className="rdoui-pt-5 rdoui-mt-5 rdoui-space-y-2 rdoui-border-t rdoui-border-gray-200">
              <li>
                <a
                  href="#"
                  className="rdoui-flex rdoui-items-center rdoui-p-2 rdoui-text-base rdoui-font-medium rdoui-text-gray-900 rdoui-rounded-lg rdoui-transition rdoui-duration-75 hover:rdoui-bg-gray-100 group"
                >
                  <svg
                    aria-hidden="true"
                    className="rdoui-flex-shrink-0 rdoui-w-6 rdoui-h-6 rdoui-text-gray-500 rdoui-transition rdoui-duration-75 rdoui-group-hover:text-gray-900"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
                    <path
                      fillRule="evenodd"
                      d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="rdoui-ml-3">Docs</span>
                </a>
              </li>
            </ul>
          </div>
        </aside>

        <main className="rdoui-p-4 md:rdoui-ml-64 rdoui-h-auto rdoui-pt-20"></main>
      </div>
    </>
  )
}
