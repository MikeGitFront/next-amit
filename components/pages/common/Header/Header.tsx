import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import s from './Header.module.css'

type HeaderProps = {
  headerInfo: {
    logo: any
    menu: any
    buttons: any
  }
}

export const Header: React.FC<HeaderProps> = ({ headerInfo }) => {
  const { logo: { url, alternativeText }, menu, buttons } = headerInfo
  return (
    <header className={s.wrapper}>
      <div className='flex items-center'>
        <Link href="/">
          <Image alt={alternativeText} width={190} height={50} src={`${'http://localhost:1337'}${url}`}></Image>
        </Link>
        <div className="flex pl-[70px] gap-x-8 text-lg">
          {menu.map((item: any) => (
            <Link className={s.link} href={item.href}>{item.label}</Link>
          ))}
        </div>
      </div>
      <div className={s.buttonsBlock}>
        {buttons.map((item: any) => (
          <Link className={s.button} href={item.href}>{item.label}</Link>
        ))}
      </div>
    </header>
  )
}