import React from 'react'
import { TitleBannerData } from '../../../../../lib/cms'
import { Container } from '../../UI/Container'
import s from './TitleBanner.module.css'


type TitleBannerProps = {
  data: TitleBannerData
}

export const TitleBanner: React.FC<TitleBannerProps> = ({ data }) => {
  const { title } = data
  return (
    <Container className="pl-0">
      <div className={s.title}>
        {title}
      </div>
    </Container>
  )
}