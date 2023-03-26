import { cva } from 'class-variance-authority'
import { ReactElement, ReactNode } from 'react'
import * as S from '../styles'

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

export type NavbarBarProps = {
  children: ReactNode
  className?: string
  py?: number | number[]
}

function NavbarBar({ py, className, children }: NavbarBarProps) {
  return (
    <header className="navbar min-h-[unset] w-full p-0px">
      <S.navbarBar className={className} py={py}>
        {children}
      </S.navbarBar>
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
          className="btn-ghost btn w-24px pl-0px pr-0px hover:bg-transparent"
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
