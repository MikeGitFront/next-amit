import React from 'react'
import { Header } from '../Header'

import s from './Layout.module.css'

type LayoutProps = {
  header: {
    logo: any
    menu: any
    buttons: any
  }
  children: React.ReactNode
}

export const Layout: React.FC<LayoutProps> = ({ children, header }) => {
  return <div className={s.root}>
    <Header headerInfo={header} />
    <main>
      {children}
      {/* <Footer /> */}
    </main>
  </div>
}