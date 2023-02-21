import { ReactElement } from 'react'

export type NavbarDashboardModel = {
  elementsLeft: ReactElement
  elementsRight?: ReactElement
  paddingY?: string
}

export function NavbarDashboard({
  elementsLeft,
  elementsRight,
  paddingY,
}: NavbarDashboardModel) {
  return (
    <>
      <div></div>
    </>
  )
}
