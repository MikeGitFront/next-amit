import Link from 'next/link'
import React from 'react'

type ButtonProps = {
  type?: 'primary' | 'secondary'
  href?: string
  noLink?: boolean
  onClick?: (arg: any) => void
  submit?: boolean
  children: React.ReactNode
}

export const Button: React.FC<ButtonProps> = ({ children, href, type = 'primary', onClick, noLink, submit }) => {
  const Component = noLink ? 'button' : Link
  return (
    <Component
      href={href || ''}
      type={submit ? 'submit' : 'button'}
      onClick={onClick}
      className={`relative min-w-40 w-44 flex text-[14px] justify-center items-center p-[calc(0.5rem+2px)_1rem_calc(0.5rem-1px)] ${
        type === 'primary' ? 'hover:bg-[#d12e00]' : 'hover:text-[#d12e00] hover:border-gray-6'
      } ${type === 'primary' ? 'text-white bg-primary' : 'text-primary bg-[#fff] border border-primary'}`}
    >
      {children}
    </Component>
  )
}
