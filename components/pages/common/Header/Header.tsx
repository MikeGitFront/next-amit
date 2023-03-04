import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import s from './Header.module.css'
import { Image as ImageT, Link as LinkT, Button as ButtonT } from '../../../../lib/cms'
import { Button } from '../UI/Button'
import cn from 'clsx'
import { useRouter } from 'next/router'
import NavIcon from '../../../icons/nav.svg'

type HeaderProps = {
  headerInfo: {
    logo: ImageT
    menu: LinkT[]
    buttons: ButtonT[]
  };
  onOpenMobile: () => void
}

export const Header: React.FC<HeaderProps> = ({ headerInfo, onOpenMobile }) => {
  const { logo: { url, alternativeText }, menu, buttons } = headerInfo
  const [isShadow, setIsShadow] = useState(false)
  const { pathname } = useRouter()

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
    <>
      <header className={cn(s.wrapper, { 'shadow-[0_0_15px_rgba(0,0,0,.1)]': isShadow })}>
        <button className='decoration-none xl:hidden' onClick={onOpenMobile}>
          <Image alt="navbar icon" width={27} height={18} src={NavIcon}></Image>
        </button>
        <div className='flex justify-center xl:justify-start w-full items-center'>
          <Link href="/">
            <Image alt={alternativeText} width={190} height={50} src={url}></Image>
          </Link>
          <div className="hidden xl:flex items-center pl-[70px] gap-x-8 text-lg">
            {menu.map((item, index) => (
              <Link key={index} className={s.link} href={item.href}>{item.label}</Link>
            ))}
          </div>
        </div>
        {pathname !== "/onboarding" && <div className={s.buttonsBlock}>
          {buttons.map((item, index) => (
            <Button key={index} type={item.buttonType} href={item.href || ''}>{item.label}</Button>
          ))}
        </div>}
      </header>
      {pathname !== "/onboarding" && <div className='flex w-full xl:hidden justify-center bg-bg-gray-5 px-16 py-4'>
        <div className="flex gap-6 items-center justify-center flex-wrap">
          {buttons.map((item, index) => (
            <Button key={index} type={item.buttonType} href={item.href || ''}>{item.label}</Button>
          ))}
        </div>
      </div>}
    </>
  )
}