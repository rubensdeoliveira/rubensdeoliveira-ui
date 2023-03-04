import * as SolidIcon from '@heroicons/react/24/solid'
import * as OutlineIcon from '@heroicons/react/24/outline'
import { IconName } from '@rubensdeoliveira-ui/react'

export function AllIcons() {
  const { ...solidIcons } = SolidIcon
  const { ...outlineIcons } = OutlineIcon
  const renderSolidIcons = Object.keys(solidIcons).map((iconName) => {
    const TheIcon = solidIcons[iconName as IconName]
    return (
      <div
        className="gap-16px p-16px flex flex-col items-center rounded border border-sky-500"
        key={iconName}
      >
        <TheIcon style={{ width: 24, height: 24 }} />
        <span className="text-xs">{iconName}</span>
      </div>
    )
  })
  const renderOutlineIcons = Object.keys(outlineIcons).map((iconName) => {
    const TheIcon = outlineIcons[iconName as IconName]
    return (
      <div
        className="gap-16px p-16px flex flex-col items-center rounded border border-sky-500"
        key={iconName}
      >
        <TheIcon style={{ width: 24, height: 24 }} />
        <span className="text-xs">{iconName}</span>
      </div>
    )
  })
  return (
    <>
      <p className="mb-4">Solid Icons:</p>
      <div className="gap-16px flex flex-wrap">{renderSolidIcons}</div>
      <p className="my-4">Outline Icons:</p>
      <div className="gap-16px flex flex-wrap">{renderOutlineIcons}</div>
    </>
  )
}
