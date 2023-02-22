import { cva, VariantProps } from 'class-variance-authority'
import React, { ReactElement } from 'react'

const navStyles = cva(
  ['px-5', 'xl:px-0', 'w-full', 'z-20', 'top-0', 'left-0'],
  {
    variants: {
      paddingY: {
        16: 'py-[1rem] md:py-[1.25rem] lg:py-[1.5rem]',
        32: 'py-[2rem] md:py-[2.25rem] lg:py-[2.5rem]',
        48: 'py-[2.5rem] md:py-[2.75rem] lg:py-[3rem]',
      },
    },
    defaultVariants: {
      paddingY: 16,
    },
  },
)

export type NavbarModel = VariantProps<typeof navStyles> & {
  elementsLeft: ReactElement
  navigationItems: ReactElement
  elementsRight?: ReactElement
  className?: string
}

export function Navbar({
  elementsLeft,
  elementsRight,
  paddingY,
  className,
  navigationItems,
}: NavbarModel) {
  return (
    <>
      <nav className={navStyles({ paddingY, className })}>
        <div className="container mx-auto flex max-w-[1240px] flex-wrap items-center justify-between">
          {elementsLeft}
          <div className="flex gap-4 md:order-2">
            {elementsRight}
            <button
              className="inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
              type="button"
              data-drawer-target="drawer-backdrop"
              data-drawer-show="drawer-backdrop"
              data-drawer-backdrop="true"
              aria-controls="drawer-backdrop"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            className="hidden w-full items-center justify-between md:order-1 md:flex md:w-auto"
            id="navbar-sticky"
          >
            <ul className="flex flex-col rounded-lg md:flex-row md:space-x-8 md:text-sm md:font-medium">
              {navigationItems}
            </ul>
          </div>
        </div>
      </nav>

      <div
        id="drawer-backdrop"
        className="fixed top-0 left-0 z-40 h-screen w-80 -translate-x-full overflow-y-auto bg-white p-4 transition-transform dark:bg-gray-800"
        tabIndex={-1}
        aria-labelledby="drawer-backdrop-label"
      >
        <h5
          id="drawer-backdrop-label"
          className="text-base font-semibold uppercase text-gray-500 dark:text-gray-400"
        >
          Menu
        </h5>
        <button
          type="button"
          data-drawer-hide="drawer-backdrop"
          aria-controls="drawer-backdrop"
          className="absolute top-2.5 right-2.5 inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
        >
          <svg
            aria-hidden="true"
            className="h-5 w-5"
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
          <span className="sr-only">Close menu</span>
        </button>
        <div className="overflow-y-auto py-4">
          <ul className="space-y-2">{navigationItems}</ul>
        </div>
      </div>
    </>
  )
}
