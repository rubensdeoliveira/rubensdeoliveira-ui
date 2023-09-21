import type { StoryObj, Meta } from '@storybook/react'
import { Icon, IconProps } from '@rubensdeoliveira-ui/react'
import { FaUser } from 'react-icons/fa'

export default {
  title: 'Components/Icon',
  component: Icon,
  args: {
    name: FaUser,
    className: 'text-white',
    size: 24,
  },
} as Meta<IconProps>

export const Sample: StoryObj<IconProps> = {}
