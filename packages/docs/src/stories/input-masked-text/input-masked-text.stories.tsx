import { Meta, StoryObj } from '@storybook/react'
import { InputMaskedTextProps } from '@rubensdeoliveira-ui/react'
import { InputMaskedTextHelper } from './input-masked-text.component.wrapper'

export default {
  title: 'Components/InputMaskedText',
  component: InputMaskedTextHelper,
  args: {
    name: 'name',
    label: 'Nome',
    mask: 'cep',
  },
} as Meta<InputMaskedTextProps>

export const Sample: StoryObj<InputMaskedTextProps> = {}
