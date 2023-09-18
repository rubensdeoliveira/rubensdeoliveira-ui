import { ReactNode, useState } from 'react'
import {
  RiMenu5Line,
  RiMenuLine,
  RiMenu2Line,
  RiMenu3Line,
} from 'react-icons/ri'
import { AiOutlineClose } from 'react-icons/ai'

export type NavbarProps = {
  logo?: ReactNode
  navigationItems?: ReactNode
  cta?: ReactNode
  wrapperClassName?: string
  mobileButtonClassName?: string
  mobileButtonType?: 'center' | 'left' | 'right' | 'center-secondary'
  showCtaOnMobile?: boolean
}

export function Navbar({
  logo,
  navigationItems,
  cta,
  wrapperClassName,
  mobileButtonClassName,
  mobileButtonType,
  showCtaOnMobile = false,
}: NavbarProps) {
  const [open, setOpen] = useState(false)

  function renderIcon() {
    const iconClassName =
      'rdoui-w-6 rdoui-h-6 rdoui-transition-all rdoui-duration-300 rdoui-ease-in-out`'
    switch (mobileButtonType) {
      case 'center-secondary':
        return <RiMenu5Line className={iconClassName} />
      case 'left':
        return <RiMenu2Line className={iconClassName} />
      case 'right':
        return <RiMenu3Line className={iconClassName} />
      default:
        return <RiMenuLine className={iconClassName} />
    }
  }

  return (
    <div className={`${wrapperClassName} rdoui-w-full rdoui-mx-auto`}>
      <div className="rdoui-relative rdoui-flex rdoui-flex-col rdoui-w-full rdoui-mx-auto md:rdoui-items-center md:rdoui-justify-between md:rdoui-flex-row">
        <div className="rdoui-flex rdoui-flex-row rdoui-items-center rdoui-justify-between lg:rdoui-justify-start">
          {logo}
          <div className="flex items-center gap-4">
            <div
              className={`${
                showCtaOnMobile
                  ? 'max-[767px]:rdoui-flex min-[768px]:rdoui-hidden'
                  : 'rdoui-hidden'
              }`}
            >
              {cta}
            </div>
            <button
              onClick={() => setOpen(!open)}
              className={`${mobileButtonClassName} rdoui-inline-flex rdoui-items-center rdoui-justify-center focus:rdoui-outline-none md:rdoui-hidden rdoui-transition-all rdoui-duration-300 rdoui-ease-in-out`}
            >
              {!open && renderIcon()}
              {open && (
                <AiOutlineClose className="rdoui-w-6 rdoui-h-6 rdoui-transition-all rdoui-duration-300 rdoui-ease-in-out`" />
              )}
            </button>
          </div>
        </div>
        <nav
          className={`${
            open ? 'max-[767px]:rdoui-flex' : 'max-[767px]:rdoui-hidden'
          } rdoui-flex-col rdoui-items-center rdoui-flex-grow md:rdoui-pb-0 md:rdoui-flex md:rdoui-flex-row`}
        >
          {navigationItems}

          <div
            className={`${
              showCtaOnMobile
                ? 'max-[767px]:rdoui-hidden min-[768px]:rdoui-flex'
                : 'max-[767px]:rdoui-flex'
            }`}
          >
            {cta}
          </div>
        </nav>
      </div>
    </div>
  )
}
