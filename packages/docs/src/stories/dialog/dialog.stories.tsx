import type { Meta, StoryObj } from '@storybook/react'
import { Dialog, DialogProps } from '@rubensdeoliveira-ui/react'

const meta: Meta<typeof Dialog> = {
  title: 'Components/Dialog',
  component: Dialog,
  argTypes: {
    isOpen: {},
    closeDialog: {},
  },
} as Meta<DialogProps>

export default meta
type Story = StoryObj<typeof Dialog>

export const Sample: Story = {
  args: {
    isOpen: true,
  },
}
