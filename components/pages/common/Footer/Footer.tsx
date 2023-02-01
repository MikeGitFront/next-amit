import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Icon, Link as LinkT } from '../../../../lib/cms'

import s from './Footer.module.css'

type FooterProps = {
  footerInfo: {
    copyright: string
    icons: Icon[]
    links: LinkT[]
  }
}

export const Footer: React.FC<FooterProps> = ({ footerInfo }) => {
  const { copyright, icons, links } = footerInfo

return <footer className={s.footer}>
    <div className='flex'>
      <span className='mr-4'>{copyright}</span>
      <div>{links.map((link, index) => {
        return <Link key={index} className={s.link} href={link.href}>{link.label}</Link>
      })}
      </div>
    </div>
    <div className='flex gap-x-[2rem]'>{icons.map(({ image, href }, index) => <Link key={index} href={href}>
      <Image alt={image.alternativeText} width={24} height={24} src={image.url}></Image>
    </Link>)}
    </div>
  </footer>
}