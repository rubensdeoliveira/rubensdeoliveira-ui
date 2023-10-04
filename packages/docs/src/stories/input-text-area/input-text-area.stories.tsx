import { Meta, StoryObj } from '@storybook/react'
import { InputTextAreaProps } from '@rubensdeoliveira-ui/react'
import { InputTextAreaHelper } from './input-text-area.component.wrapper'

export default {
  title: 'Components/InputTextArea',
  component: InputTextAreaHelper,
  args: {
    name: 'name',
    label: 'Nome',
    mask: 'cep',
    inputClassName: 'focus:outline-none outline-none',
  },
} as Meta<InputTextAreaProps>

export const Sample: StoryObj<InputTextAreaProps> = {}
