import { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonRootProps } from '@rubensdeoliveira-ui/react'

export default {
  title: 'Components/Button',
  component: Button.Root,
  args: {
    children: <Button.Text>Enviar</Button.Text>,
    className: 'bg-[#29BFC0] text-white rounded-full'
  }
} as Meta<ButtonRootProps>

export const Default: StoryObj<ButtonRootProps> = {}

export const ClassName: StoryObj<ButtonRootProps> = {
  args: {
    className: 'bg-[#c029b6] text-white rounded-[6px]'
  }
}

export const IsLoading: StoryObj<ButtonRootProps> = {
  args: {
    isLoading: true
  }
}

export const Disabled: StoryObj<ButtonRootProps> = {
  args: {
    disabled: true
  }
}

export const WithIcon: StoryObj<ButtonRootProps> = {
  args: {
    children: (
      <>
        <Button.Text>Enviar</Button.Text>
        <Button.Icon name="ChevronRightIcon" />
      </>
    )
  }
}

export const PaddingHorizontal: StoryObj<ButtonRootProps> = {
  args: {
    paddingHorizontal: '16'
  }
}

export const PaddingHorizontalResponsive: StoryObj<ButtonRootProps> = {
  args: {
    paddingHorizontal: ['16', '32', '48']
  }
}

export const PaddingVertical: StoryObj<ButtonRootProps> = {
  args: {
    paddingVertical: '16'
  }
}

export const PaddingVerticalResponsive: StoryObj<ButtonRootProps> = {
  args: {
    paddingVertical: ['16', '32', '48']
  }
}
