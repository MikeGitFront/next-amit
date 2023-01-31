import React from 'react'
import { Header } from '../Header'
import { Footer } from '../Footer'

import s from './Layout.module.css'
import { Image, Link, Button } from '../../../../lib/cms'

type LayoutProps = {
  header: {
    logo: Image
    menu: Link[]
    buttons: Button[]
  }
  footer: {
    copyright: string
    icons: any
    links: Link[]
  }
  children: React.ReactNode
}

export const Layout: React.FC<LayoutProps> = ({ children, header, footer }) => {
  return <div className={s.root}>
    <Header headerInfo={header} />
    <main className={s.content}>
      <article className="mx-auto max-w-[1440px] px-4">
        {children}
      </article>
    </main>
    <Footer footerInfo={footer} />
  </div>
}