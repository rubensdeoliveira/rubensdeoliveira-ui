import type { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonProps } from '@rubensdeoliveira-ui/react'
import { FiCalendar } from 'react-icons/fi'

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    label: { name: 'label' },
    isLoading: { name: 'isLoading', type: 'boolean' },
    containerClassName: { name: 'containerClassName', type: 'string' },
    textClassName: { name: 'textClassName', type: 'string' },
    buttonType: {
      name: 'buttonType',
      type: { name: 'enum', value: ['filled', 'ghosted', 'bordered'] },
    },
  },
} as Meta<ButtonProps>

export default meta
type Story = StoryObj<typeof Button>

export const Filled: Story = {
  args: {
    label: 'Entrar',
    containerClassName: 'bg-[#c029b6] text-white rounded-full',
    buttonType: 'filled',
  },
}

export const Ghosted: Story = {
  args: {
    label: 'Entrar',
    containerClassName: 'bg-[#c029b6] text-white',
    buttonType: 'ghosted',
  },
}

export const Bordered: Story = {
  args: {
    label: 'Entrar',
    containerClassName: 'border-[#c029b6] text-white rounded-full',
    buttonType: 'bordered',
  },
}

export const Loading: Story = {
  args: {
    label: 'Entrar',
    isLoading: true,
    containerClassName: 'bg-[#c029b6] text-white rounded-full',
  },
}

export const Disabled: Story = {
  args: {
    label: 'Entrar',
    disabled: true,
    containerClassName: 'bg-[#c029b6] text-white rounded-full',
  },
}

export const Text_With_Icon: Story = {
  args: {
    label: 'Entrar',
    iconLeft: FiCalendar,
    iconRight: undefined,
    buttonType: 'filled',
    containerClassName: 'bg-[#c029b6] text-white rounded-full',
  },
}

export const Icon: Story = {
  args: {
    label: undefined,
    iconLeft: FiCalendar,
    iconRight: undefined,
    buttonType: 'ghosted',
    containerClassName: 'text-white',
  },
}
