import { cva } from 'class-variance-authority'
import { ReactElement, ReactNode } from 'react'
import { renderResponsizeProp } from '../helpers/render-responsive-prop'

function renderNavigationItems(children: ReactElement | ReactElement[]) {
  if (Array.isArray(children)) {
    return children.map((navigationItem, index) => (
      <li key={index} className="text-16px">
        {navigationItem}
      </li>
    ))
  }
  return <li>{children}</li>
}

export type NavbarRootProps = {
  children: ReactNode
}

function NavbarRoot({ children }: NavbarRootProps) {
  return <div className="drawer">{children}</div>
}

NavbarRoot.displayName = 'Navbar.Root'

export type NavbarMainProps = {
  children: ReactNode
}

function NavbarMain({ children }: NavbarMainProps) {
  return (
    <>
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">{children}</div>
    </>
  )
}

NavbarMain.displayName = 'Navbar.Main'

export type NavbarAsideProps = {
  children: ReactNode
}

function NavbarAside({ children }: NavbarAsideProps) {
  return (
    <div className="drawer-side">
      <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
      {children}
    </div>
  )
}

NavbarAside.displayName = 'Navbar.Aside'

const navbarAsideStyles = cva('menu w-[320px] p-16px')

export type NavbarAsideMenuItemsProps = {
  children: ReactElement | ReactElement[]
  className?: string
}

function NavbarAsideMenuItems({
  children,
  className,
}: NavbarAsideMenuItemsProps) {
  return (
    <ul className={navbarAsideStyles({ className })}>
      {renderNavigationItems(children)}
    </ul>
  )
}

NavbarAsideMenuItems.displayName = 'Navbar.AsideMenuItems'

const navBarStyles = cva(
  'w-full max-w-[1200px] flex justify-between px-20px xl:px-0px mx-[auto]',
  {
    variants: {
      py: {
        0: 'py-0px',
        1: 'py-1px',
        2: 'py-2px',
        3: 'py-3px',
        4: 'py-4px',
        5: 'py-5px',
        6: 'py-6px',
        7: 'py-7px',
        8: 'py-8px',
        9: 'py-9px',
        10: 'py-10px',
        11: 'py-11px',
        12: 'py-12px',
        13: 'py-13px',
        14: 'py-14px',
        15: 'py-15px',
        16: 'py-16px',
        17: 'py-17px',
        18: 'py-18px',
        19: 'py-19px',
        20: 'py-20px',
        21: 'py-21px',
        22: 'py-22px',
        23: 'py-23px',
        24: 'py-24px',
        25: 'py-25px',
        26: 'py-26px',
        27: 'py-27px',
        28: 'py-28px',
        29: 'py-29px',
        30: 'py-30px',
        31: 'py-31px',
        32: 'py-32px',
        33: 'py-33px',
        34: 'py-34px',
        35: 'py-35px',
        36: 'py-36px',
        37: 'py-37px',
        38: 'py-38px',
        39: 'py-39px',
        40: 'py-40px',
        41: 'py-41px',
        42: 'py-42px',
        43: 'py-43px',
        44: 'py-44px',
        45: 'py-45px',
        46: 'py-46px',
        47: 'py-47px',
        48: 'py-48px',
      },
      pyMd: {
        0: 'md:py-0px',
        1: 'md:py-1px',
        2: 'md:py-2px',
        3: 'md:py-3px',
        4: 'md:py-4px',
        5: 'md:py-5px',
        6: 'md:py-6px',
        7: 'md:py-7px',
        8: 'md:py-8px',
        9: 'md:py-9px',
        10: 'md:py-10px',
        11: 'md:py-11px',
        12: 'md:py-12px',
        13: 'md:py-13px',
        14: 'md:py-14px',
        15: 'md:py-15px',
        16: 'md:py-16px',
        17: 'md:py-17px',
        18: 'md:py-18px',
        19: 'md:py-19px',
        20: 'md:py-20px',
        21: 'md:py-21px',
        22: 'md:py-22px',
        23: 'md:py-23px',
        24: 'md:py-24px',
        25: 'md:py-25px',
        26: 'md:py-26px',
        27: 'md:py-27px',
        28: 'md:py-28px',
        29: 'md:py-29px',
        30: 'md:py-30px',
        31: 'md:py-31px',
        32: 'md:py-32px',
        33: 'md:py-33px',
        34: 'md:py-34px',
        35: 'md:py-35px',
        36: 'md:py-36px',
        37: 'md:py-37px',
        38: 'md:py-38px',
        39: 'md:py-39px',
        40: 'md:py-40px',
        41: 'md:py-41px',
        42: 'md:py-42px',
        43: 'md:py-43px',
        44: 'md:py-44px',
        45: 'md:py-45px',
        46: 'md:py-46px',
        47: 'md:py-47px',
        48: 'md:py-48px',
      },
      pyLg: {
        0: 'lg:py-0px',
        1: 'lg:py-1px',
        2: 'lg:py-2px',
        3: 'lg:py-3px',
        4: 'lg:py-4px',
        5: 'lg:py-5px',
        6: 'lg:py-6px',
        7: 'lg:py-7px',
        8: 'lg:py-8px',
        9: 'lg:py-9px',
        10: 'lg:py-10px',
        11: 'lg:py-11px',
        12: 'lg:py-12px',
        13: 'lg:py-13px',
        14: 'lg:py-14px',
        15: 'lg:py-15px',
        16: 'lg:py-16px',
        17: 'lg:py-17px',
        18: 'lg:py-18px',
        19: 'lg:py-19px',
        20: 'lg:py-20px',
        21: 'lg:py-21px',
        22: 'lg:py-22px',
        23: 'lg:py-23px',
        24: 'lg:py-24px',
        25: 'lg:py-25px',
        26: 'lg:py-26px',
        27: 'lg:py-27px',
        28: 'lg:py-28px',
        29: 'lg:py-29px',
        30: 'lg:py-30px',
        31: 'lg:py-31px',
        32: 'lg:py-32px',
        33: 'lg:py-33px',
        34: 'lg:py-34px',
        35: 'lg:py-35px',
        36: 'lg:py-36px',
        37: 'lg:py-37px',
        38: 'lg:py-38px',
        39: 'lg:py-39px',
        40: 'lg:py-40px',
        41: 'lg:py-41px',
        42: 'lg:py-42px',
        43: 'lg:py-43px',
        44: 'lg:py-44px',
        45: 'lg:py-45px',
        46: 'lg:py-46px',
        47: 'lg:py-47px',
        48: 'lg:py-48px',
      },
    },
    defaultVariants: {
      py: 16,
      pyLg: 16,
      pyMd: 16,
    },
  },
)

export type NavbarBarProps = {
  children: ReactNode
  className?: string
  py?: number | number[]
}

function NavbarBar({ py, className, children }: NavbarBarProps) {
  return (
    <header className="navbar min-h-[unset] w-full p-0px">
      <div
        className={navBarStyles({
          py: renderResponsizeProp(py),
          pyMd: renderResponsizeProp(py, 'md'),
          pyLg: renderResponsizeProp(py, 'lg'),
          className,
        })}
      >
        {children}
      </div>
    </header>
  )
}

NavbarBar.displayName = 'Navbar.Bar'

export type NavbarContentProps = {
  children: ReactNode
}

function NavbarContent({ children }: NavbarContentProps) {
  return <>{children}</>
}

NavbarContent.displayName = 'Navbar.Content'

export type NavbarBarLogoProps = {
  children: ReactElement | ReactElement[]
}

function NavbarBarLogo({ children }: NavbarBarLogoProps) {
  return (
    <div className="flex items-center gap-16px">
      <div className="flex-none md:hidden">
        <label
          htmlFor="my-drawer-3"
          className="btn btn-ghost w-24px pl-0px pr-0px hover:bg-transparent"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="h-6 w-6 inline-block stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </label>
      </div>
      <div className="hidden items-center gap-16px md:flex">{children}</div>
    </div>
  )
}

NavbarBarLogo.displayName = 'Navbar.BarLogo'

export type NavbarBarMenuItemsProps = {
  children: ReactElement | ReactElement[]
}

function NavbarBarMenuItems({ children }: NavbarBarMenuItemsProps) {
  return (
    <div className="hidden flex-none md:block">
      <ul className="menu menu-horizontal flex items-center gap-72px">
        {renderNavigationItems(children)}
      </ul>
    </div>
  )
}

NavbarBarMenuItems.displayName = 'Navbar.BarMenuItems'

export type NavbarBarActionProps = {
  children: ReactElement | ReactElement[]
}

function NavbarBarAction({ children }: NavbarBarActionProps) {
  return <div className="flex items-center gap-16px">{children}</div>
}

NavbarBarAction.displayName = 'Navbar.BarAction'

export const Navbar = {
  Root: NavbarRoot,
  Main: NavbarMain,
  Aside: NavbarAside,
  AsideMenuItems: NavbarAsideMenuItems,
  Bar: NavbarBar,
  Content: NavbarContent,
  BarLogo: NavbarBarLogo,
  BarMenuItems: NavbarBarMenuItems,
  BarAction: NavbarBarAction,
}
