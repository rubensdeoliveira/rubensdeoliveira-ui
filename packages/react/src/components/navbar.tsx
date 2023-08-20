import { ReactNode, useState } from 'react'
import 'flowbite'

export type NavbarProps = {
  logo?: ReactNode
  navigationItems?: ReactNode
  cta?: ReactNode
  wrapperClassName?: string
  mobileButtonClassName?: string
}

export function Navbar({
  logo,
  navigationItems,
  cta,
  wrapperClassName,
  mobileButtonClassName
}: NavbarProps) {
  const [open, setOpen] = useState(false)

  return (
    <div className={`${wrapperClassName} w-full mx-auto`}>
      <div className="relative flex flex-col w-full mx-auto tablet:items-center tablet:justify-between tablet:flex-row">
        <div className="flex flex-row items-center justify-between laptop:justify-start w-full">
          {logo}
          <button
            onClick={() => setOpen(!open)}
            className={`${mobileButtonClassName} inline-flex items-center justify-center focus:outline-none tablet:hidden`}
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
            open ? 'max-[767px]:flex' : 'max-[767px]:hidden'
          } flex-col items-center flex-grow tablet:pb-0 tablet:flex tablet:flex-row`}
        >
          {navigationItems}

          {cta}
        </nav>
      </div>
    </div>
  )
}
