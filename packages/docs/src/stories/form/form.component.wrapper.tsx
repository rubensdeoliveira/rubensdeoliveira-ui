import { Form, Button, InputMultSelect } from '@rubensdeoliveira-ui/react'
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
        <InputMultSelect
          control={control}
          name="hobbies"
          options={[
            { label: 'Karate', value: 'karate' },
            { label: 'Futebol', value: 'futebol' },
            { label: 'Cantar', value: 'cantar' },
          ]}
        />
        <Button label="Enviar" containerClassName="bg-red-500" />
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
