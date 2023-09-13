import { Form, InputText, Button, Dialog } from '@rubensdeoliveira-ui/react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

type FormData = {
  name: string
  calories: number
}

export function Playground() {
  const [openModal, setOpenModal] = useState(false)
  const { handleSubmit, control } = useForm<FormData>()
  const [data, setData] = useState<FormData>({} as FormData)

  async function handleSubmitForm(data: FormData) {
    try {
      console.log('caiu no erro')
      const simulationTime = 2000
      setTimeout(() => {
        const simulatedData = { result: data }
        console.log(simulatedData)
      }, simulationTime)
    } catch {
      console.log('caiu no erro')
    }
  }

  async function handleOpenModal(open: boolean) {
    setOpenModal(open)
  }

  return (
    <Form className="gap-4">
      <InputText name="name" control={control} />
      <InputText name="calories" control={control} />

      <Button
        label="Enviar"
        containerClassName="bg-red-500"
        onClick={() => handleOpenModal(true)}
      />
      <Dialog
        isOpen={openModal}
        setOpen={handleOpenModal}
        primaryButton={{
          label: 'Enviar',
          type: 'submit',
          onClick: handleSubmit(handleSubmitForm),
        }}
        secondaryButton={{ label: 'Cancelar' }}
      />
    </Form>
  )
}
