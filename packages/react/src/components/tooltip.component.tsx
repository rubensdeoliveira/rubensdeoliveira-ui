import { ReactElement } from 'react'
import * as HTooltip from '@radix-ui/react-tooltip'

export type TooltipProps = {
  trigger: ReactElement
  message: string
}

export function Tooltip({ trigger, message }: TooltipProps) {
  return (
    <HTooltip.Provider>
      <HTooltip.Root>
        <HTooltip.Trigger asChild>{trigger}</HTooltip.Trigger>
        <HTooltip.Portal>
          <HTooltip.Content
            className="data-[state=delayed-open]:data-[side=top]:rdoui-animate-slideDownAndFade data-[state=delayed-open]:data-[side=right]:rdoui-animate-slideLeftAndFade data-[state=delayed-open]:data-[side=left]:rdoui-animate-slideRightAndFade data-[state=delayed-open]:data-[side=bottom]:rdoui-animate-slideUpAndFade rdoui-text-violet11 rdoui-select-none rdoui-rounded-[4px] rdoui-bg-white rdoui-px-[15px] rdoui-py-[10px] rdoui-text-[15px] rdoui-leading-none rdoui-shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] rdoui-will-change-[transform,opacity]"
            sideOffset={5}
          >
            {message}
            <HTooltip.Arrow className="rdoui-fill-white" />
          </HTooltip.Content>
        </HTooltip.Portal>
      </HTooltip.Root>
    </HTooltip.Provider>
  )
}
