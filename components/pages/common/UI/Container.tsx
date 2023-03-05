import React from 'react'
import cn from 'clsx'

type ContainerProps = {
  children: React.ReactNode
  className?: string
}

export const Container: React.FC<ContainerProps> = ({ children, className }) => {
  return <div className={cn('px-4 my-4', className)}>{children}</div>
}
