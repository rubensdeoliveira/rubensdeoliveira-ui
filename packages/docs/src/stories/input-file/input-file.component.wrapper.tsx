import { InputFile, InputFileProps } from '@rubensdeoliveira-ui/react'
import { useForm } from 'react-hook-form'

export function InputFileHelper({ ...rest }: InputFileProps) {
  const { control } = useForm<FormData>()

  return <InputFile {...rest} control={control} />
}
