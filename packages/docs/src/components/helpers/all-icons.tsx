import * as SolidIcon from '@heroicons/react/24/solid'
import * as OutlineIcon from '@heroicons/react/24/outline'
import { IconName } from '@rubensdeoliveira-ui/react'

import '../../styles/all-icons.css'

export function AllIcons() {
  const { ...solidIcons } = SolidIcon
  const { ...outlineIcons } = OutlineIcon
  const renderSolidIcons = Object.keys(solidIcons).map((iconName) => {
    const TheIcon = solidIcons[iconName as IconName]
    return (
      <div key={iconName} className="icon-item">
        <TheIcon style={{ width: 24, height: 24 }} />
        <span>{iconName}</span>
      </div>
    )
  })
  const renderOutlineIcons = Object.keys(outlineIcons).map((iconName) => {
    const TheIcon = outlineIcons[iconName as IconName]
    return (
      <div key={iconName} className="icon-item">
        <TheIcon style={{ width: 24, height: 24 }} />
        <span>{iconName}</span>
      </div>
    )
  })
  return (
    <>
      <p className="icon-title">Solid Icons:</p>
      <div className="icon-items-container">{renderSolidIcons}</div>
      <p className="icon-title">Outline Icons:</p>
      <div className="icon-items-container">{renderOutlineIcons}</div>
    </>
  )
}
