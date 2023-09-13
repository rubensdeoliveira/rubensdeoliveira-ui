import React, { ReactElement } from 'react'

export type SkeletonProps = {
  items: ReactElement[]
}

export function Skeleton({ items }: SkeletonProps) {
  return (
    <div role="status" className="rdoui-max-w-sm rdoui-animate-pulse">
      {items.map((item, index) => (
        <React.Fragment key={index}>{item}</React.Fragment>
      ))}
      <span className="rdoui-sr-only">Loading...</span>
    </div>
  )
}
