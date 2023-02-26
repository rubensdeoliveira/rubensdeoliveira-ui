import type { StoryObj, Meta } from '@storybook/react'
import { Button, ButtonProps } from '@rubensdeoliveira-ui/react'

export default {
  title: 'Components/Button',
  component: Button,
  args: {
    label: 'Enviar',
    buttonType: 'primary',
    iconLeft: 'AcademicCapIcon',
    isLoading: false,
    className: 'bg-red-500 dark:bg-blue-600',
  },
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'link', 'ghost', 'google'],
      control: {
        type: 'inline-radio',
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    iconLeft: {
      type: 'string',
    },
    iconRight: {
      type: 'string',
    },
    onClick: { action: 'clicked' },
  },
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {}
