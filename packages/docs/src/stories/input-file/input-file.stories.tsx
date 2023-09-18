import { Meta, StoryObj } from '@storybook/react'
import { InputFileProps } from '@rubensdeoliveira-ui/react'
import { InputFileHelper } from './input-file.component.wrapper'

export default {
  title: 'Components/InputFile',
  component: InputFileHelper,
  args: {
    name: 'password',
    containerClassName: 'bg-white',
  },
} as Meta<InputFileProps>

export const Sample: StoryObj<InputFileProps> = {}
