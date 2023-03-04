import { cva, VariantProps } from 'class-variance-authority'
import { ReactElement, ReactNode } from 'react'

function renderNavigationItems(children: ReactElement | ReactElement[]) {
  if (Array.isArray(children)) {
    return children.map((navigationItem, index) => (
      <li key={index} className="text-16">
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

const navbarAsideStyles = cva('menu w-80 p-4')

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
  'w-full max-w-[1240px] flex justify-between px-5 xl:px-0 mx-auto',
  {
    variants: {
      py: {
        16: 'py-[0.75rem] md:py-[0.875rem] lg:py-[1rem]',
        24: 'py-[1rem] md:py-[1.25rem] lg:py-[1.5rem]',
        32: 'py-[1.5rem] md:py-[1.75rem] lg:py-[2rem]',
        40: 'py-[1.5rem] md:py-[1.75rem] lg:py-[2.5rem]',
        48: 'py-[2.5rem] md:py-[2.75rem] lg:py-[3rem]',
      },
    },
    defaultVariants: {
      py: 16,
    },
  },
)

export type NavbarBarProps = VariantProps<typeof navBarStyles> & {
  children: ReactNode
  className?: string
}

function NavbarBar({ py, className, children }: NavbarBarProps) {
  return (
    <div className="navbar w-full p-0">
      <div className={navBarStyles({ py, className })}>{children}</div>
    </div>
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
    <div className="flex items-center gap-4">
      <div className="flex-none md:hidden">
        <label
          htmlFor="my-drawer-3"
          className="btn-ghost btn w-6 pl-0 pr-0 hover:bg-transparent"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block h-6 w-6 stroke-current"
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
      <div className="hidden items-center gap-4 md:flex">{children}</div>
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
      <ul className="menu menu-horizontal flex items-center gap-[4.5rem]">
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
  return <div className="flex items-center gap-4">{children}</div>
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
