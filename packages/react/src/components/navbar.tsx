import { cva, VariantProps } from 'class-variance-authority'
import { ReactElement, ReactNode } from 'react'

function renderNavigationItems(children: ReactElement | ReactElement[]) {
  if (Array.isArray(children)) {
    return children.map((navigationItem, index) => (
      <li key={index}>{navigationItem}</li>
    ))
  }
  return <li>{children}</li>
}

const navStyles = cva(
  'w-full max-w-[1240px] flex justify-between px-5 xl:px-0 mx-auto',
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

export type NavbarAsideMenuItemsProps = {
  children: ReactElement | ReactElement[]
}

function NavbarAsideMenuItems({ children }: NavbarAsideMenuItemsProps) {
  return (
    <ul className="menu p-4 w-80 bg-base-100">
      {renderNavigationItems(children)}
    </ul>
  )
}

NavbarAsideMenuItems.displayName = 'Navbar.AsideMenuItems'

export type NavbarBarProps = VariantProps<typeof navStyles> & {
  children: ReactNode
  className?: string
}

function NavbarBar({ paddingY, className, children }: NavbarBarProps) {
  return (
    <div className="w-full navbar p-0">
      <div className={navStyles({ paddingY, className })}>{children}</div>
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
      <div className="flex-none lg:hidden">
        <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-6 h-6 stroke-current"
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
      <div className="flex items-center gap-4">{children}</div>
    </div>
  )
}

NavbarBarLogo.displayName = 'Navbar.BarLogo'

export type NavbarBarMenuItemsProps = {
  children: ReactElement | ReactElement[]
}

function NavbarBarMenuItems({ children }: NavbarBarMenuItemsProps) {
  return (
    <div className="flex-none hidden lg:block">
      <ul className="menu menu-horizontal">
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
