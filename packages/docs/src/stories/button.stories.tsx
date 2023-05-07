import { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonRootProps } from '@rubensdeoliveira-ui/react'

export default {
  title: 'Components/Button',
  component: Button.Root,
  args: {
    children: <Button.Text>Enviar</Button.Text>,
    className: 'bg-[#29BFC0] text-white rounded-full justify-center',
    h: 50,
    w: 327,
  },
} as Meta<ButtonRootProps>

export const Default: StoryObj<ButtonRootProps> = {}

export const IsLoading: StoryObj<ButtonRootProps> = {
  args: {
    isLoading: true,
  },
}

export const Disabled: StoryObj<ButtonRootProps> = {
  args: {
    disabled: true,
  },
}

export const WithIcon: StoryObj<ButtonRootProps> = {
  args: {
    children: (
      <>
        <Button.Text>Enviar</Button.Text>
        <Button.Icon name="ChevronRightIcon" />
      </>
    ),
  },
}
