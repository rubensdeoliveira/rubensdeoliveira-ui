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
import { InputDate } from '@rubensdeoliveira-ui/react-datepicker'
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
        <FormGroup>
          <InputText name="name" control={control} />
        </FormGroup>
        <FormGroup>
          <InputText name="email" control={control} containerClassName="px-0" />
          <InputText name="password" control={control} type="password" />
        </FormGroup>
        <FormGroup>
          <InputSelect
            control={control}
            name="occupation"
            options={[
              { label: 'Programador', value: 'programador' },
              { label: 'Engenheiro', value: 'engenheiro' },
              { label: 'Dentista', value: 'dentista' },
            ]}
          />
        </FormGroup>
        <FormGroup>
          <InputAutoComplete
            control={control}
            name="sport"
            options={[
              { label: 'Futebol', value: 'futebol' },
              { label: 'Vôlei', value: 'vôlei' },
              { label: 'Atletismo', value: 'atletismo' },
            ]}
          />
        </FormGroup>
        <FormGroup>
          <InputCheckbox
            control={control}
            name="acceptTerms"
            label="Aceito os termos"
          />
        </FormGroup>
        <FormGroup>
          <InputCurrency control={control} name="salary" />
        </FormGroup>
        <FormGroup>
          <InputDate
            label="Data de Nascimento"
            control={control}
            name="birthday"
          />
        </FormGroup>
        <FormGroup>
          <InputMaskedText control={control} name="phone" mask="telefone" />
        </FormGroup>
        <FormGroup>
          <InputMultSelect
            control={control}
            name="hobbies"
            options={[
              { label: 'Karate', value: 'karate' },
              { label: 'Futebol', value: 'futebol' },
              { label: 'Cantar', value: 'cantar' },
            ]}
          />
        </FormGroup>
        <FormGroup>
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
        </FormGroup>
        <FormGroup>
          <InputSwitch control={control} name="isOrganDonor" />
        </FormGroup>
        <FormGroup>
          <InputTextArea rows={10} control={control} name="about" />
        </FormGroup>
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
