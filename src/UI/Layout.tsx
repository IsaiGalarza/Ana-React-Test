import React from 'react'
import './styles.scss'

interface Props {
  children: React.ReactNode
}

export function Layout(props: Props) {
  const { children } = props
  return (
    <div className="d-flex justify-content-center">
      <div className="all">{children}</div>
    </div>
  )
}
