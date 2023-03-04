import React from "react"
import { ShowOffBannerData } from "../../../../../lib/cms"
import { Container } from "../../UI/Container"
import s from './ShowOffBanner.module.css'

type ShowOffBannerProps = {
  data: ShowOffBannerData
}

export const ShowOffBanner: React.FC<ShowOffBannerProps> = ({ data }) => {
  const { items, title } = data

  return (
    <Container>
      <div className={s.wrapper}>
        <div className="text-3xl mb-4 text-center md:text-start text-text-primary">{title}</div>
        {items.map(({ item }, index) => {
          return (
            <span key={index} className="mb-4 text-text-primary">{item}</span>
          )
        })}
      </div>
    </Container>
  )
}