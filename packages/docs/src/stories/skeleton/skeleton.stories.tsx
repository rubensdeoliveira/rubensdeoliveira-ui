import type { StoryObj, Meta } from '@storybook/react'
import { Skeleton, SkeletonProps } from '@rubensdeoliveira-ui/react'

export default {
  title: 'Components/Skeleton',
  component: Skeleton,
  args: {
    items: [
      <div
        className="h-2.5 bg-gray-200 rounded-full w-48 mb-4"
        key="skeleton-1"
      ></div>,
      <div
        className="h-2.5 bg-gray-200 rounded-full w-48 mb-4"
        key="skeleton-2"
      ></div>,
    ],
  },
} as Meta<SkeletonProps>

export const Sample: StoryObj<SkeletonProps> = {}
