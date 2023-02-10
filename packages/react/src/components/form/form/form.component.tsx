import { FormHTMLAttributes, ReactNode } from 'react'

export type FormModel = FormHTMLAttributes<HTMLFormElement> & {
  children: ReactNode
}

export function Form({ children, ...rest }: FormModel) {
  return <form {...rest}>{children}</form>
}
