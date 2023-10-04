import { InputTextArea, InputTextAreaProps } from '@rubensdeoliveira-ui/react'
import { useForm } from 'react-hook-form'

export function InputTextAreaHelper({ ...rest }: InputTextAreaProps) {
  const { control } = useForm<FormData>()

  return <InputTextArea {...rest} control={control} />
}
