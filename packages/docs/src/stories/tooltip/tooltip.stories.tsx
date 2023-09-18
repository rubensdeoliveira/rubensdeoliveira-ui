import type { StoryObj, Meta } from '@storybook/react'
import { Tooltip, TooltipProps } from '@rubensdeoliveira-ui/react'

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
  args: {
    message: 'Teste',
    trigger: <p>teste</p>,
  },
} as Meta<TooltipProps>

export const Sample: StoryObj<TooltipProps> = {}
