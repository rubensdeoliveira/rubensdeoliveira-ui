import { Dialog as HModal, Transition } from '@headlessui/react'
import { Fragment, ReactNode } from 'react'
import { cva } from 'class-variance-authority'

export type ModalProps = {
  isOpen: boolean
  setOpen: (open: boolean) => void
  title?: string
  description?: string
  containerClassName?: string
  titleClassName?: string
  descriptionClassName?: string
  children?: ReactNode
}

const containerStyles = cva(
  'rdoui-w-full rdoui-transform rdoui-overflow-hidden rdoui-rounded-2xl rdoui-p-6 rdoui-text-left rdoui-align-middle rdoui-shadow-xl rdoui-transition-all',
)
const titleStyles = cva('rdoui-text-lg rdoui-font-medium rdoui-leading-6')
const descriptionStyles = cva('rdoui-text-sm')

export function Modal({
  isOpen,
  setOpen,
  children,
  description,
  title,
  containerClassName,
  descriptionClassName,
  titleClassName,
}: ModalProps) {
  async function handleSetOpen(open: boolean) {
    setOpen(open)
  }

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <HModal
        as="div"
        className="rdoui-relative rdoui-z-50"
        onClose={() => handleSetOpen(false)}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="rdoui-fixed rdoui-inset-0 rdoui-bg-black rdoui-bg-opacity-25" />
        </Transition.Child>

        <div className="rdoui-fixed rdoui-inset-0 rdoui-overflow-y-auto">
          <div className="rdoui-flex rdoui-min-h-full rdoui-items-center rdoui-justify-center rdoui-p-4 rdoui-text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <HModal.Panel
                className={containerStyles({ className: containerClassName })}
              >
                {title && (
                  <HModal.Title
                    as="h3"
                    className={titleStyles({ className: titleClassName })}
                  >
                    {title}
                  </HModal.Title>
                )}
                {description && (
                  <div className="rdoui-mt-2">
                    <p
                      className={descriptionStyles({
                        className: descriptionClassName,
                      })}
                    >
                      {description}
                    </p>
                  </div>
                )}

                {children}
              </HModal.Panel>
            </Transition.Child>
          </div>
        </div>
      </HModal>
    </Transition>
  )
}
