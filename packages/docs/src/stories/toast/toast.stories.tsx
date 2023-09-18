import type { StoryObj, Meta } from '@storybook/react'
import { Toast, ToastProps } from '@rubensdeoliveira-ui/react'

export default {
  title: 'Components/Toast',
  component: Toast,
  args: {
    title: 'Titulo do toast',
    description: 'essa é a descricao do toast',
    isOpen: false,
  },
} as Meta<ToastProps>

export const Sample: StoryObj<ToastProps> = {}
