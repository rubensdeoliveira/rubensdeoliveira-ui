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

export const BigSize: StoryObj<ButtonRootProps> = {
  args: {
    size: 'big',
  },
}

export const SmallSize: StoryObj<ButtonRootProps> = {
  args: {
    size: 'small',
  },
}

export const SmallerSize: StoryObj<ButtonRootProps> = {
  args: {
    size: 'smaller',
  },
}

export const Responsive: StoryObj<ButtonRootProps> = {
  args: {
    size: ['small', 'default', 'big'],
  },
}

export const TextIcon: StoryObj<ButtonRootProps> = {
  args: {
    children: [
      <Button.Text>Navegar</Button.Text>,
      <Button.Icon name="ChevronRightIcon" />,
    ],
  },
}

export const Icon: StoryObj<ButtonRootProps> = {
  args: {
    children: [<Button.Icon name="ChevronRightIcon" />],
    size: 'circle',
  },
}

export const Outline: StoryObj<ButtonRootProps> = {
  args: {
    buttonType: 'outline',
  },
}
