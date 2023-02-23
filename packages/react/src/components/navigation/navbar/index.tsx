import { cva, VariantProps } from 'class-variance-authority'
import { ReactElement } from 'react'

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

type LiChildrenModel = {
  liChildren: ReactElement
}

export type NavbarModel = VariantProps<typeof navStyles> & {
  elementsLeft: ReactElement
  navigationItems: LiChildrenModel[]
  elementsRight?: ReactElement
  className?: string
}

export function Navbar({
  elementsLeft,
  elementsRight,
  paddingY,
  className,
  navigationItems,
}: NavbarModel) {
  function renderNavigationItems() {
    return navigationItems.map((navigationItem, index) => (
      <li key={index}>{navigationItem.liChildren}</li>
    ))
  }

  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        <div className="w-full navbar p-0">
          <div className={navStyles({ paddingY, className })}>
            <div className="flex items-center gap-4">
              <div className="flex-none lg:hidden">
                <label
                  htmlFor="my-drawer-3"
                  className="btn btn-square btn-ghost"
                >
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
              <div>{elementsLeft}</div>
            </div>
            <div className="flex-none hidden lg:block">
              <ul className="menu menu-horizontal">
                {renderNavigationItems()}
              </ul>
            </div>
            <div>{elementsRight}</div>
          </div>
        </div>
        Content
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 bg-base-100">{renderNavigationItems()}</ul>
      </div>
    </div>
  )
}
