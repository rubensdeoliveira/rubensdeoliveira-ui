import type { StoryObj, Meta } from '@storybook/react'
import { Toast, ToastProps } from '@rubensdeoliveira-ui/react'

export default {
  title: 'Components/Toast',
  component: Toast,
  args: {
    message: 'Essa é uma mensagem de um toast',
    type: 'success',
  },
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}
