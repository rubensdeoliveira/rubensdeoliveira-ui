import { Meta, StoryObj } from '@storybook/react'
import { UncontrolledInputTextProps } from '@rubensdeoliveira-ui/react'
import { UncontrolledInputTextHelper } from './uncontrolled-input-text.component.wrapper'

export default {
  title: 'Components/UncontrolledInputText',
  component: UncontrolledInputTextHelper,
  args: {
    name: 'password',
    inputContainerClassName: 'bg-white px-4',
    label: 'Nome',
    type: 'password',
  },
} as Meta<UncontrolledInputTextProps>

export const Sample: StoryObj<UncontrolledInputTextProps> = {}
