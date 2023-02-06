import React from 'react'
import './styles/index.css'

type ButtonModel = {
  children: React.ReactNode
}

export function Button({ children }: ButtonModel) {
  return (
    <button className="bg-zinc-800 p-10 dark:bg-gray-900">{children}</button>
  )
}
