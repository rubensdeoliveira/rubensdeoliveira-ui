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
    <div className={`${wrapperClassName} rdoui-w-full rdoui-mx-auto`}>
      <div className="rdoui-relative rdoui-flex rdoui-flex-col rdoui-w-full rdoui-mx-auto rdoui-md:items-center rdoui-md:justify-between rdoui-md:flex-row">
        <div className="rdoui-flex rdoui-flex-row rdoui-items-center rdoui-justify-between rdoui-lg:justify-start rdoui-w-full">
          {logo}
          <button
            onClick={() => setOpen(!open)}
            className={`${mobileButtonClassName} rdoui-inline-flex rdoui-items-center rdoui-justify-center rdoui-focus:outline-none rdoui-md:hidden`}
          >
            <svg
              className="w-6 h-6"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                className={`${open ? 'rdoui-hidden' : 'rdoui-inline-flex'}`}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
              <path
                className={`${open ? 'rdoui-inline-flex' : 'rdoui-hidden'}`}
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
            open ? 'rdoui-max-[767px]:flex' : 'rdoui-max-[767px]:hidden'
          } rdoui-flex-col rdoui-items-center rdoui-flex-grow rdoui-md:pb-0 rdoui-md:flex rdoui-md:flex-row`}
        >
          {navigationItems}

          {cta}
        </nav>
      </div>
    </div>
  )
}
