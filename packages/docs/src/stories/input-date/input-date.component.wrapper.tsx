import {
  InputDate,
  InputDateProps,
} from '@rubensdeoliveira-ui/react-datepicker'
import { useForm } from 'react-hook-form'

export function InputDateHelper({ ...rest }: InputDateProps) {
  const { control } = useForm<FormData>()

  return <InputDate {...rest} control={control} />
}
