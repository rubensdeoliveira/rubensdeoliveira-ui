import type { StoryObj, Meta } from '@storybook/react'
import { Button, ButtonModel } from '@rubensdeoliveira-ui/react'

export default {
  title: 'Form/Button',
  component: Button,
  args: {
    label: 'Enviar',
    buttonType: 'primary',
    iconLeft: 'AcademicCapIcon',
    isLoading: false,
  },
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'link', 'ghost'],
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
} as Meta<ButtonModel>

export const Primary: StoryObj<ButtonModel> = {}
