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
        className="flex flex-col gap-4 p-4 border border-sky-500 rounded items-center"
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
        className="flex flex-col gap-4 p-4 border border-sky-500 rounded items-center"
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
      <div className="flex flex-wrap gap-4">{renderSolidIcons}</div>
      <p className="my-4">Outline Icons:</p>
      <div className="flex flex-wrap gap-4">{renderOutlineIcons}</div>
    </>
  )
}