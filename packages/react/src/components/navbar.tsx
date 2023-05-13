import { ReactNode, useState } from 'react'
import 'flowbite'

export type NavbarProps = {
  logo?: ReactNode
  navigationItems?: ReactNode
  cta?: ReactNode
  wrapperClassName?: string
}

export function Navbar({
  logo,
  navigationItems,
  cta,
  wrapperClassName
}: NavbarProps) {
  const [open, setOpen] = useState(false)

  return (
    <div className={`${wrapperClassName} w-full mx-auto bg-white`}>
      <div className="relative flex flex-col w-full mx-auto bg-white md:items-center md:justify-between md:flex-row">
        <div className="flex flex-row items-center justify-between lg:justify-start w-full">
          {logo}
          <button
            onClick={() => setOpen(!open)}
            className="inline-flex items-center justify-center text-gray-400 hover:text-black focus:outline-none focus:text-black md:hidden"
          >
            <svg
              className="w-6 h-6"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                className={`${open ? 'hidden' : 'inline-flex'}`}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
              <path
                className={`${open ? 'inline-flex' : 'hidden'}`}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
        <nav
          className={`${
            open ? 'flex' : 'hidden'
          } flex-col items-center flex-grow md:pb-0 md:flex md:flex-row`}
        >
          {navigationItems}

          {cta}
        </nav>
      </div>
    </div>
  )
}
