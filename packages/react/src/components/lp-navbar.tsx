import { ReactNode } from 'react'
import { Icon } from './icon'

// LpNavbar Root

export type LpNavbarRootProps = {
  children: ReactNode
}

export function LpNavbarRoot({ children }: LpNavbarRootProps) {
  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      {children}
    </div>
  )
}

LpNavbarRoot.displayName = 'LpNavbar.Root'

// LpNavbar Drawer Content

export type LpNavbarDrawerContentProps = {
  children: ReactNode
}

export function LpNavbarDrawerContent({
  children
}: LpNavbarDrawerContentProps) {
  return <div className="drawer-content flex flex-col">{children}</div>
}

LpNavbarDrawerContent.displayName = 'LpNavbar.DrawerContent'

//LpNavbar Drawer Content Navbar

export type LpNavbarDrawerContentNavbarProps = {
  children: ReactNode
  className?: string
}

export function LpNavbarDrawerContentNavbar({
  children,
  className = ''
}: LpNavbarDrawerContentNavbarProps) {
  return <div className={`${className} w-full navbar`}>{children}</div>
}

LpNavbarDrawerContentNavbar.displayName = 'LpNavbar.DrawerContentNavbar'

// LpNavbar Drawer Content Children

export type LpNavbarDrawerContentChildrenProps = {
  children: ReactNode
}

export function LpNavbarDrawerContentChildren({
  children
}: LpNavbarDrawerContentChildrenProps) {
  return <>{children}</>
}

LpNavbarDrawerContentChildren.displayName = 'LpNavbar.DrawerContentChildren'

// LpNavbar Drawer Content Items

export type LpNavbarDrawerContentItemsProps = {
  children: ReactNode
}

export function LpNavbarDrawerContentNavbarItems({
  children
}: LpNavbarDrawerContentItemsProps) {
  return <div className="flex-none hidden tablet:block">{children}</div>
}

LpNavbarDrawerContentNavbarItems.displayName =
  'LpNavbar.DrawerContentNavbarItems'

// LpNavbar Drawer Content Logo

// export type LpNavbarDrawerContentLogoProps = {
//   children: ReactNode
// }

export function LpNavbarDrawerContentNavbarLogo() {
  return <div className="flex-1 px-2 mx-2">Navbar Title</div>
}

LpNavbarDrawerContentNavbarLogo.displayName = 'LpNavbar.DrawerContentNavbarLogo'

// LpNavbar Drawer Content OpenIcon

// export type LpNavbarDrawerContentOpenIconProps = {
//   children: ReactNode
// }

export function LpNavbarDrawerContentNavbarOpenIcon() {
  return (
    <div className="flex-none tablet:hidden">
      <label htmlFor="my-drawer-3" className="cursor-pointer w-[24px] h-[24px]">
        <Icon name="Bars3Icon" />
      </label>
    </div>
  )
}

LpNavbarDrawerContentNavbarOpenIcon.displayName =
  'LpNavbar.DrawerContentNavbarOpenIcon'

// LpNavbar Drawer Side

export type LpNavbarDrawerSideProps = {
  children: ReactNode
}

export function LpNavbarDrawerSide({ children }: LpNavbarDrawerSideProps) {
  return (
    <div className="drawer-side">
      <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
      {children}
    </div>
  )
}

LpNavbarDrawerSide.displayName = 'LpNavbar.DrawerSide'

// Export components
export const LpNavbar = {
  Root: LpNavbarRoot,
  DrawerContent: LpNavbarDrawerContent,
  DrawerContentNavbar: LpNavbarDrawerContentNavbar,
  DrawerContentNavbarItems: LpNavbarDrawerContentNavbarItems,
  DrawerContentNavbarLogo: LpNavbarDrawerContentNavbarLogo,
  DrawerContentNavbarOpenIcon: LpNavbarDrawerContentNavbarOpenIcon,
  DrawerContentChildren: LpNavbarDrawerContentChildren,
  DrawerSide: LpNavbarDrawerSide
}
