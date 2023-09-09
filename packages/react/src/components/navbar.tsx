import { ReactNode, useState } from 'react'

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
  mobileButtonClassName,
}: NavbarProps) {
  const [open, setOpen] = useState(false)

  return (
    <div className={`${wrapperClassName} rdoui-w-full rdoui-mx-auto`}>
      <div className="rdoui-relative rdoui-flex rdoui-flex-col rdoui-w-full rdoui-mx-auto md:rdoui-items-center md:rdoui-justify-between md:rdoui-flex-row">
        <div className="rdoui-flex rdoui-flex-row rdoui-items-center rdoui-justify-between lg:rdoui-justify-start rdoui-w-full">
          {logo}
          <button
            onClick={() => setOpen(!open)}
            className={`${mobileButtonClassName} rdoui-inline-flex rdoui-items-center rdoui-justify-center focus:rdoui-outline-none md:rdoui-hidden`}
          >
            <svg
              className="rdoui-w-6 rdoui-h-6"
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
            open ? 'max-[767px]:rdoui-flex' : 'max-[767px]:rdoui-hidden'
          } rdoui-flex-col rdoui-items-center rdoui-flex-grow md:rdoui-pb-0 md:rdoui-flex md:rdoui-flex-row`}
        >
          {navigationItems}

          {cta}
        </nav>
      </div>
    </div>
  )
}
