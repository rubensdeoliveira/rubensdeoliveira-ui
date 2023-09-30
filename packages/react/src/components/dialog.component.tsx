import { Dialog as HDialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { Button, ButtonProps } from './button.component'
import { cva } from 'class-variance-authority'

export type DialogProps = {
  isOpen: boolean
  primaryButton: ButtonProps
  secondaryButton?: ButtonProps
  setOpen: (open: boolean) => void
  title?: string
  description?: string
  containerClassName?: string
  titleClassName?: string
  descriptionClassName?: string
}

const containerStyles = cva(
  'rdoui-w-full rdoui-transform rdoui-overflow-hidden rdoui-p-6 rdoui-text-left rdoui-align-middle rdoui-shadow-xl rdoui-transition-all',
)
const titleStyles = cva('')
const descriptionStyles = cva('')

export function Dialog({
  isOpen,
  setOpen,
  primaryButton,
  secondaryButton,
  description,
  title,
  containerClassName,
  descriptionClassName,
  titleClassName,
}: DialogProps) {
  async function handleSetOpen(open: boolean) {
    setOpen(open)
  }

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <HDialog
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
              <HDialog.Panel
                className={containerStyles({ className: containerClassName })}
              >
                {title && (
                  <HDialog.Title
                    as="h3"
                    className={titleStyles({ className: titleClassName })}
                  >
                    {title}
                  </HDialog.Title>
                )}
                <div className="rdoui-mt-2">
                  {description && (
                    <p
                      className={descriptionStyles({
                        className: descriptionClassName,
                      })}
                    >
                      {description}
                    </p>
                  )}
                </div>

                <div className="rdoui-mt-4">
                  <Button {...secondaryButton} />
                  <Button {...primaryButton} />
                </div>
              </HDialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </HDialog>
    </Transition>
  )
}
