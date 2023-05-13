import { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from '@rubensdeoliveira-ui/react'

export default {
  title: 'Components/Text',
  component: Text,
  args: {
    children: 'Hello World!'
  }
} as Meta<TextProps>

export const Default: StoryObj<TextProps> = {}

export const ClassName: StoryObj<TextProps> = {
  args: {
    className: 'text-red-500'
  }
}

export const FontSize: StoryObj<TextProps> = {
  args: {
    fontSize: '16'
  }
}

export const FontSizeResponsive: StoryObj<TextProps> = {
  args: {
    fontSize: ['16', '32', '48']
  }
}

export const FontWeight: StoryObj<TextProps> = {
  args: {
    fontWeight: '600'
  }
}

export const FontWeightResponsive: StoryObj<TextProps> = {
  args: {
    fontWeight: ['400', '500', '600']
  }
}

export const MarginTop: StoryObj<TextProps> = {
  args: {
    marginTop: '16'
  }
}

export const MarginTopResponsive: StoryObj<TextProps> = {
  args: {
    marginTop: ['16', '32', '48']
  }
}

export const MarginBottom: StoryObj<TextProps> = {
  args: {
    marginBottom: '16'
  }
}

export const MarginBottomResponsive: StoryObj<TextProps> = {
  args: {
    marginBottom: ['16', '32', '48']
  }
}

export const Heading: StoryObj<TextProps> = {
  args: {
    as: 'h1'
  }
}

export const LineHeight: StoryObj<TextProps> = {
  args: {
    lineHeight: '2'
  }
}
