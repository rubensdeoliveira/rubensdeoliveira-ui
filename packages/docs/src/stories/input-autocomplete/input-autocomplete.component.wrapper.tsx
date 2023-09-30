import {
  InputAutoComplete,
  InputAutoCompleteProps,
} from '@rubensdeoliveira-ui/react'
import { useForm } from 'react-hook-form'

export function InputAutoCompleteHelper({ ...rest }: InputAutoCompleteProps) {
  const { control } = useForm()

  return <InputAutoComplete {...rest} control={control} />
}
