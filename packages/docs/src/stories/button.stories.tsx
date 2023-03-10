/* eslint-disable react/jsx-key */

import { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonRootProps } from '@rubensdeoliveira-ui/react'

export default {
  title: 'Components/Button',
  component: Button.Root,
  args: {
    children: <Button.Text>Enviar</Button.Text>,
  },
} as Meta<ButtonRootProps>

export const Default: StoryObj<ButtonRootProps> = {}

export const Big: StoryObj<ButtonRootProps> = {
  args: {
    size: 'big',
  },
}

export const Small: StoryObj<ButtonRootProps> = {
  args: {
    size: 'small',
  },
}

export const Smaller: StoryObj<ButtonRootProps> = {
  args: {
    size: 'smaller',
  },
}

export const WithIcon: StoryObj<ButtonRootProps> = {
  args: {
    children: [
      <Button.Text>Navegar</Button.Text>,
      <Button.Icon name="ChevronRightIcon" />,
    ],
  },
}
