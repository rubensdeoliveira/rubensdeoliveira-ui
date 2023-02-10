import React from 'react'

export type TextModel = { children: React.ReactNode }

export function Text({ children }: TextModel) {
  return <p>{children}</p>
}
