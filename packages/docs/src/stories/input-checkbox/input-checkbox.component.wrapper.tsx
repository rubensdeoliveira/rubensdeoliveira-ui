import { InputCheckbox, InputCheckboxProps } from '@rubensdeoliveira-ui/react'
import { useForm } from 'react-hook-form'

export function InputCheckboxHelper({ ...rest }: InputCheckboxProps) {
  const { control } = useForm<FormData>()

  return <InputCheckbox {...rest} control={control} />
}
