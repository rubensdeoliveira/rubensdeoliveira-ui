import {
  Form,
  InputText,
  Button,
  InputSelect,
  InputAutoComplete,
  InputCheckbox,
  InputCurrency,
  InputMaskedText,
  InputMultSelect,
  InputRadio,
  InputSwitch,
  InputTextArea,
  FormGroup,
} from '@rubensdeoliveira-ui/react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

type FormData = {
  name: string
  email: string
  password: string
  occupation: string
  sport: string
  acceptTerms: boolean
  salary: string
  birthday: string
  phone: string
  hobbies: string[]
  gender: string
  isOrganDonor: boolean
  about: string
}

export function FormExample() {
  const { handleSubmit, control } = useForm<FormData>()
  const [data, setData] = useState<FormData>({} as FormData)

  function handleSubmitForm(data: FormData) {
    setData(data)
  }

  return (
    <div className="flex flex-col gap-10 bg-red-300 p-10 rounded">
      <Form onSubmit={handleSubmit(handleSubmitForm)} className="gap-4">
        <InputMultSelect
          containerClassName="gap-[0.8125rem] items-start"
          inputContainerClassName={`border-d-input-border focus:border-red-500 py-[1.0625rem] px-6 border rounded-[12px] bg-d-bg-two shadow-[0px_4px_6px_0px_rgba(62,73,84,0.04)] text-d-text-one`}
          labelClassName="leading-[1.5] font-semibold text-d-text-one"
          errorSpanClassName="bg-red-500"
          optionClassName={({ active }) =>
            `${active ? 'bg-blue-500' : 'bg-white'}`
          }
          optionsContainerClassName="rounded-[12px]"
          control={control}
          name="hobbies"
          options={[
            { label: 'Karate', value: 'karate' },
            { label: 'Futebol', value: 'futebol' },
            { label: 'Cantar', value: 'cantar' },
          ]}
          label="Hobbies"
        />
        <Button label="Enviar" containerClassName="bg-red-500" type="submit" />
      </Form>

      <div className="bg-white p-4 shadow-md rounded-lg">
        <h2 className="text-lg font-bold mb-2">Objeto Resultante:</h2>
        <ul className="list-disc pl-4">
          {Object.entries(data).map(([key, value]) => (
            <li key={key}>
              <span className="font-semibold">{key}:</span>{' '}
              {JSON.stringify(value)}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
