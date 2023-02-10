import type { StoryObj, Meta } from '@storybook/react'
import { Toast, ToastModel } from '@rubensdeoliveira-ui/react'

export default {
  title: 'Alert/Toast',
  component: Toast,
  args: {
    message: 'Essa é uma mensagem de um toast',
    type: 'success',
  },
} as Meta<ToastModel>

export const Primary: StoryObj<ToastModel> = {}
