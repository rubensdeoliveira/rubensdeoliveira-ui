import { ReactNode } from 'react'

export type FormGroupProps = {
  children: ReactNode
}

export function FormGroup({ children }: FormGroupProps) {
  return <div>{children}</div>
}
