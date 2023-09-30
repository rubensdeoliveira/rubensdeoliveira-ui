import { InputSelect, InputSelectProps } from '@rubensdeoliveira-ui/react'
import { useForm } from 'react-hook-form'

export function InputSelectHelper({ ...rest }: InputSelectProps) {
  const { control } = useForm()

  return <InputSelect {...rest} control={control} />
}
