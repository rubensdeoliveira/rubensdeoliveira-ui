import React from 'react'
import './styles/index.css'

type ButtonModel = {
  children: React.ReactNode
}

export function Button({ children }: ButtonModel) {
  return <button className="bg-black p-10 dark:bg-white">{children}</button>
}
