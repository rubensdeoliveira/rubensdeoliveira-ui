import * as RadixToast from '@radix-ui/react-toast'
import { useState, useRef, useEffect } from 'react'
import { Icon } from './icon.component'
import { AiOutlineClose } from 'react-icons/ai'
import { cva } from 'class-variance-authority'

export type ToastProps = {
  title: string
  isOpen: boolean
  description?: string
  timerInSeconds?: number
  type?: 'warning' | 'error' | 'success'
  colorType?: 'solid' | 'light'
  containerClassName?: string
  titleClassName?: string
  descriptionClassName?: string
}

const containerStyles = cva(
  "rdoui-top-0 rdoui-flex rdoui-justify-between rdoui-max-w-xs rdoui-p-4 rdoui-rounded-md rdoui-shadow-md rdoui-[grid-template-areas:_'title_action'_'description_action'] rdoui-grid-cols-[auto_max-content] rdoui-gap-x-[15px] rdoui-items-center data-[state=open]:rdoui-animate-slideIn data-[state=closed]:rdoui-animate-hide data-[swipe=move]:rdoui-translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=cancel]:rdoui-translate-x-0 data-[swipe=cancel]:rdoui-transition-[transform_200ms_ease-out] data-[swipe=end]:rdoui-animate-swipeOut",
  {
    variants: {
      color: {
        'solid-warning': 'rdoui-bg-yellow-500 rdoui-text-white',
        'solid-error': 'rdoui-bg-red-500 rdoui-text-white',
        'solid-success': 'rdoui-bg-green-500 rdoui-text-white',
        'light-warning':
          'rdoui-bg-yellow-100 rdoui-border rdoui-border-yellow-200 rdoui-text-yellow-500',
        'light-error':
          'rdoui-text-red-500 rdoui-bg-red-100 rdoui-border rdoui-border-red-200',
        'light-success':
          'rdoui-bg-green-100 rdoui-border rdoui-border-green-200 rdoui-text-green-500',
      },
    },
    defaultVariants: {
      color: 'solid-warning',
    },
  },
)

const titleStyles = cva('')

const descriptionStyles = cva('')

export function Toast({
  title,
  description,
  timerInSeconds = 3,
  isOpen,
  colorType = 'light',
  type = 'error',
  containerClassName,
  titleClassName,
  descriptionClassName,
}: ToastProps) {
  const [open, setOpen] = useState(false)
  const time = timerInSeconds * 1000

  useEffect(() => {
    setOpen(isOpen)
  }, [isOpen])

  useEffect(() => {
    if (open) {
      const timer = setTimeout(() => {
        setOpen(false)
      }, time)

      return () => {
        clearTimeout(timer)
      }
    }
  }, [open, time])

  return (
    <RadixToast.Provider swipeDirection="right">
      <RadixToast.Root
        className={containerStyles({
          color: `${colorType}-${type}`,
          className: containerClassName,
        })}
        open={open}
        onOpenChange={setOpen}
      >
        <div>
          <RadixToast.Title
            className={titleStyles({ className: titleClassName })}
          >
            {title}
          </RadixToast.Title>
          {description && (
            <RadixToast.Description
              className={descriptionStyles({ className: descriptionClassName })}
            >
              {description}
            </RadixToast.Description>
          )}
        </div>
        <RadixToast.Close>
          <Icon name={AiOutlineClose} size={18} />
        </RadixToast.Close>
      </RadixToast.Root>
      <RadixToast.Viewport className="rdoui-[--viewport-padding:_25px] rdoui-min-w-[320px] rdoui-fixed rdoui-top-7 rdoui-right-7 rdoui-flex rdoui-flex-col rdoui-p-[var(--viewport-padding)] rdoui-gap-[10px] rdoui-m-0 rdoui-list-none rdoui-z-[2147483647] rdoui-outline-none" />
    </RadixToast.Provider>
  )
}
