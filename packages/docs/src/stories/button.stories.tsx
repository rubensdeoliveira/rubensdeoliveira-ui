import { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonProps } from '@rubensdeoliveira-ui/react'

export default {
  title: 'Components/Button',
  component: Button,
  args: {
    label: 'Entrar',
    paddingHorizontal: '16',
    paddingVertical: '8',
    labelProps: { fontSize: '14' },
  },
  parameters: {
    previewTabs: {
      canvas: { hidden: true },
    },
    viewMode: 'docs',
    options: {
      showToolbar: false,
    },
  },
} as Meta<ButtonProps>

export const Filled: StoryObj<ButtonProps> = {
  args: {
    className: 'bg-[#c029b6] text-white rounded-full',
    buttonType: 'filled',
  },
}

export const Ghosted: StoryObj<ButtonProps> = {
  args: {
    className: 'bg-[#c029b6] text-white',
    buttonType: 'ghosted',
  },
}

export const Bordered: StoryObj<ButtonProps> = {
  args: {
    className: 'border-[#c029b6] text-white rounded-full',
    buttonType: 'bordered',
  },
}

export const Loading: StoryObj<ButtonProps> = {
  args: {
    isLoading: true,
    className: 'bg-[#c029b6] text-white rounded-full',
  },
}

export const Disabled: StoryObj<ButtonProps> = {
  args: {
    disabled: true,
    className: 'bg-[#c029b6] text-white rounded-full',
  },
}

export const Text_With_Icon: StoryObj<ButtonProps> = {
  args: {
    iconLeft: { name: 'AcademicCapIcon' },
    iconRight: undefined,
    buttonType: 'filled',
    className: 'bg-[#c029b6] text-white rounded-full',
  },
}

export const Icon: StoryObj<ButtonProps> = {
  args: {
    label: undefined,
    iconLeft: { name: 'AcademicCapIcon' },
    iconRight: undefined,
    buttonType: 'ghosted',
    className: 'text-white',
  },
}
