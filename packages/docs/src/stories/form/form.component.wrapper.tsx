import {
  Form,
  InputText,
  Button,
  InputSelect,
  InputAutoComplete,
  InputCheckbox,
  InputCurrency,
  InputDate,
  InputMaskedText,
  FormRow,
  InputMultSelect,
  InputRadio,
  InputSwitch,
  InputTextArea,
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

export function FormWrapper() {
  const { handleSubmit, control } = useForm<FormData>()
  const [data, setData] = useState<FormData>({} as FormData)

  function handleSubmitForm(data: FormData) {
    setData(data)
  }

  return (
    <div className="flex flex-col gap-10 bg-red-300 p-10 rounded">
      <Form onSubmit={handleSubmit(handleSubmitForm)} className="gap-4">
        <FormRow>
          <InputText name="name" control={control} />
        </FormRow>
        <FormRow>
          <InputText name="email" control={control} containerClassName="px-0" />
          <InputText name="password" control={control} type="password" />
        </FormRow>
        <FormRow>
          <InputSelect
            control={control}
            name="occupation"
            options={[
              { label: 'Programador', value: 'programador' },
              { label: 'Engenheiro', value: 'engenheiro' },
              { label: 'Dentista', value: 'dentista' },
            ]}
          />
        </FormRow>
        <FormRow>
          <InputAutoComplete
            control={control}
            name="sport"
            options={[
              { label: 'Futebol', value: 'futebol' },
              { label: 'Vôlei', value: 'vôlei' },
              { label: 'Atletismo', value: 'atletismo' },
            ]}
          />
        </FormRow>
        <FormRow>
          <InputCheckbox
            control={control}
            name="acceptTerms"
            label="Aceito os termos"
          />
        </FormRow>
        <FormRow>
          <InputCurrency control={control} name="salary" />
        </FormRow>
        <FormRow>
          <InputDate control={control} name="birthday" />
        </FormRow>
        <FormRow>
          <InputMaskedText control={control} name="phone" mask="telefone" />
        </FormRow>
        <FormRow>
          <InputMultSelect
            control={control}
            name="hobbies"
            options={[
              { label: 'Karate', value: 'karate' },
              { label: 'Futebol', value: 'futebol' },
              { label: 'Cantar', value: 'cantar' },
            ]}
          />
        </FormRow>
        <FormRow>
          <InputRadio
            control={control}
            name="gender"
            options={[
              { label: 'Masculino', value: 'male' },
              { label: 'Feminino', value: 'female' },
            ]}
            renderRadioItemBody={(item, option) => (
              <span className={item.checked ? 'text-red-500' : 'text-blue-500'}>
                {option.label}
              </span>
            )}
          />
        </FormRow>
        <FormRow>
          <InputSwitch control={control} name="isOrganDonor" />
        </FormRow>
        <FormRow>
          <InputTextArea rows={10} control={control} name="about" />
        </FormRow>
        <Button label="Enviar" className="bg-red-500" />
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
