/* eslint-disable react/jsx-key */
import { Meta, StoryObj } from '@storybook/react'
import { TextInput, TextInputRootProps } from '@rubensdeoliveira-ui/react'

export default {
  title: 'Components/TextInput',
  component: TextInput.Root,
  args: {
    children: [<TextInput.Input placeholder="Digite seu e-mail" />],
  },
} as Meta<TextInputRootProps>

export const Default: StoryObj<TextInputRootProps> = {}

export const WithIcon: StoryObj<TextInputRootProps> = {
  args: {
    children: [
      <TextInput.Icon name="EnvelopeIcon" />,
      <TextInput.Input placeholder="Digite seu e-mail" />,
    ],
  },
}
