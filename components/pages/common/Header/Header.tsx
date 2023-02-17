import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import s from './Header.module.css'
import { Image as ImageT, Link as LinkT, Button as ButtonT } from '../../../../lib/cms'
import { Button } from '../UI/Button'
import cn from 'clsx'

type HeaderProps = {
  headerInfo: {
    logo: ImageT
    menu: LinkT[]
    buttons: ButtonT[]
  }
}

export const Header: React.FC<HeaderProps> = ({ headerInfo }) => {
  const { logo: { url, alternativeText }, menu, buttons } = headerInfo
  const [isShadow, setIsShadow] = useState(false)

  useEffect(() => {
    const handleScrollY = () => {
      if (window.scrollY > 96) {
        setIsShadow(true)
      } else {
        setIsShadow(false)
      }
    }

    window.addEventListener("scroll", handleScrollY)
    return () => window.removeEventListener("scroll", handleScrollY)
  }, [])

  return (
    <header className={cn(s.wrapper, { 'shadow-[0_0_15px_rgba(0,0,0,.1)]': isShadow })}>
      <div className='flex items-center'>
        <Link href="/">
          <Image alt={alternativeText} width={190} height={50} src={url}></Image>
        </Link>
        <div className="flex items-center pl-[70px] gap-x-8 text-lg">
          {menu.map((item, index) => (
            <Link key={index} className={s.link} href={item.href}>{item.label}</Link>
          ))}
        </div>
      </div>
      <div className={s.buttonsBlock}>
        {buttons.map((item, index) => (
          <Button key={index} type={item.buttonType} href={item.href || ''}>{item.label}</Button>
        ))}
      </div>
    </header>
  )
}