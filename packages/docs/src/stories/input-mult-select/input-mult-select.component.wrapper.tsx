import {
  InputMultSelect,
  InputMultSelectProps,
} from '@rubensdeoliveira-ui/react'
import { useForm } from 'react-hook-form'

export function InputMultSelectHelper({ ...rest }: InputMultSelectProps) {
  const { control } = useForm()

  return <InputMultSelect {...rest} control={control} />
}
