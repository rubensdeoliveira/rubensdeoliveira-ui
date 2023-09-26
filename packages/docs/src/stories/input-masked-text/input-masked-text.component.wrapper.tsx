import {
  InputMaskedText,
  InputMaskedTextProps,
} from '@rubensdeoliveira-ui/react'
import { useForm } from 'react-hook-form'

export function InputMaskedTextHelper({ ...rest }: InputMaskedTextProps) {
  const { control } = useForm<FormData>()

  return <InputMaskedText {...rest} control={control} />
}
