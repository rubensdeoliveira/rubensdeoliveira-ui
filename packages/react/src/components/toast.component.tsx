import * as RadixToast from '@radix-ui/react-toast'
import { useState, useRef, useEffect } from 'react'

export type ToastProps = {
  title: string
  description?: string
  time: number
  isOpen: boolean
}

export function Toast({ title, description, time = 100, isOpen }: ToastProps) {
  const [open, setOpen] = useState(isOpen)
  const timerRef = useRef(0)

  useEffect(() => {
    return () => clearTimeout(timerRef.current)
  }, [])

  useEffect(() => {
    if (isOpen) {
      setOpen(false)
      window.clearTimeout(timerRef.current)
      timerRef.current = window.setTimeout(() => {
        setOpen(true)
      }, time)
    }
  }, [isOpen, time])

  return (
    <RadixToast.Provider swipeDirection="right">
      <RadixToast.Root
        className="rdoui-bg-white rdoui-rounded-md rdoui-shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] rdoui-p-[15px] rdoui-grid rdoui-[grid-template-areas:_'title_action'_'description_action'] rdoui-grid-cols-[auto_max-content] rdoui-gap-x-[15px] rdoui-items-center data-[state=open]:rdoui-animate-slideIn data-[state=closed]:rdoui-animate-hide data-[swipe=move]:rdoui-translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=cancel]:rdoui-translate-x-0 data-[swipe=cancel]:rdoui-transition-[transform_200ms_ease-out] data-[swipe=end]:rdoui-animate-swipeOut"
        open={open}
        onOpenChange={setOpen}
      >
        <RadixToast.Title className="rdoui-[grid-area:_title] rdoui-mb-[5px] rdoui-font-medium rdoui-text-slate12 rdoui-text-[15px]">
          {title}
        </RadixToast.Title>
        {description && (
          <RadixToast.Description asChild>{description}</RadixToast.Description>
        )}
      </RadixToast.Root>
      <RadixToast.Viewport className="rdoui-[--viewport-padding:_25px] rdoui-fixed rdoui-bottom-0 rdoui-right-0 rdoui-flex rdoui-flex-col rdoui-p-[var(--viewport-padding)] rdoui-gap-[10px] rdoui-w-[390px] rdoui-max-w-[100vw] rdoui-m-0 rdoui-list-none rdoui-z-[2147483647] rdoui-outline-none" />
    </RadixToast.Provider>
  )
}
