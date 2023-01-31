import Link from 'next/link'
import React from 'react'

type ButtonProps = {
  type?: 'primary' | 'secondary'
  href: string
  children: React.ReactNode
}

export const Button: React.FC<ButtonProps> = ({ children, href, type = 'primary' }) => {
  return <button className={`relative min-w-40 w-44 flex justify-center items-center p-[calc(0.5rem+1px)_1rem_calc(0.5rem-1px)] ${type === 'primary' ? 'text-[#fff] bg-primary' : 'text-primary bg-[#fff] border border-primary'}`}>
    <Link href={href}>
      {children}
    </Link>
  </button>
}