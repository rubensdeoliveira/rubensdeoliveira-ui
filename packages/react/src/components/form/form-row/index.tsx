import { ReactNode } from 'react'

export type FormRowModel = {
  children: ReactNode
}

export function FormRow({ children }: FormRowModel) {
  return <div>{children}</div>
}
