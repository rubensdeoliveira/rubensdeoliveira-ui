import { FormHTMLAttributes, ReactNode } from 'react'

export type FormProps = FormHTMLAttributes<HTMLFormElement> & {
  children: ReactNode
}

export function Form({ children, ...rest }: FormProps) {
  return <form {...rest}>{children}</form>
}
