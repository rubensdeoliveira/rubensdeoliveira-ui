import { InputText, InputTextProps } from '@rubensdeoliveira-ui/react'
import { useForm } from 'react-hook-form'

export function InputTextWithForm({ ...rest }: InputTextProps) {
  const { control } = useForm<FormData>()

  return <InputText {...rest} control={control} />
}
