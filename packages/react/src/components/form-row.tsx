import { ReactNode } from 'react'

export type FormRowProps = {
  children: ReactNode
}

export function FormRow({ children }: FormRowProps) {
  return <div>{children}</div>
}
