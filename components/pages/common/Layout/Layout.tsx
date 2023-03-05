import React, { useEffect, useRef, useState } from 'react'
import { Header } from '../Header'
import { Footer } from '../Footer'
import s from './Layout.module.css'
import { Image as ImageType, Link as LinkType, Button } from '../../../../lib/cms'
import Link from 'next/link'
import Image from 'next/image'
import CloseIcon from '../../../icons/xclose.svg'
import { useRouter } from 'next/router'
import { usePrevious } from '../../../hooks/usePrevious'
import { useOutside } from '../../../hooks/useOutside'

type LayoutProps = {
  header: {
    logo: ImageType
    menu: LinkType[]
    buttons: Button[]
  }
  footer: {
    copyright: string
    icons: any
    links: LinkType[]
  }
  children: React.ReactNode
}

export const Layout: React.FC<LayoutProps> = ({ children, header, footer }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { pathname } = useRouter()
  const asideRef = useRef(null)

  useOutside(asideRef.current!, () => setIsMobileMenuOpen(false))

  const previousPath = usePrevious(pathname)
  useEffect(() => {
    if (previousPath !== pathname && isMobileMenuOpen) {
      setIsMobileMenuOpen(false)
    }
  }, [pathname, isMobileMenuOpen, previousPath])

  const {
    logo: { alternativeText, url },
    menu,
  } = header
  return (
    <div className={s.root}>
      <Header headerInfo={header} onOpenMobile={() => setIsMobileMenuOpen(true)} />
      <main className={s.content}>
        <article className="mx-auto max-w-[1440px] md:px-4">{children}</article>
      </main>
      <Footer footerInfo={footer} />
      <button
        onClick={() => setIsMobileMenuOpen(false)}
        className={`${
          isMobileMenuOpen ? 'fixed block' : 'hidden'
        } top-0 left-0 w-full h-full appearance-none z-[11] cursor-pointer bg-[rgba(0,0,0,.5)]`}
      ></button>
      <aside
        ref={asideRef}
        className={`${
          isMobileMenuOpen ? 'grid' : 'hidden'
        } fixed bg-[#fff] bottom-0 z-[12] top-0 left-0 grid-rows-[auto_1fr_auto] max-w-[20rem] w-full`}
      >
        <div className="row-span-1 flex justify-between items-center mx-4 h-[4rem]">
          <Link className="mx-auto" href="/">
            <Image alt={alternativeText} width={152} height={40} src={url}></Image>
          </Link>
          <button onClick={() => setIsMobileMenuOpen(false)}>
            <Image src={CloseIcon} alt="close icon" width={14} height={14} />
          </button>
        </div>
        <div className="flex flex-col mt-8 mx-4 items-center gap-y-8 font-semibold text-lg row-span-1">
          {menu.map((item, index) => (
            <Link key={index} className={s.link} href={item.href}>
              {item.label}
            </Link>
          ))}
        </div>
        <div className="h-[6rem] bg-bg-gray-5"></div>
      </aside>
    </div>
  )
}
