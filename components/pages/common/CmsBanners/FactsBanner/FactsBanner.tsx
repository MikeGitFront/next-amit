import Image from "next/image"
import React from "react"
import { FactsBannerData } from "../../../../../lib/cms"
import { Container } from "../../UI/Container"
import s from "./FactsBanner.module.css"

type FactsBannerProps = {
  data: FactsBannerData
}

export const FactsBanner: React.FC<FactsBannerProps> = ({ data }) => {
  const { items } = data

  return (
    <Container>
      <div className={s.wrapper}>
        {items.map(({ description, image, title }, index) => {
          return (
            <div key={index} className={"w-[45%] md:w-[25%] mt-4 md:mt-0 flex flex-col items-center justify-start"}>
              <div className="w-[70px] h-[70px]">
                <Image src={image?.url || ""} alt={image?.alternativeText || ""} width={70} height={70} />
              </div>
              <div className="text-text-primary text-[28px] mb-2">{title}</div>
              <div className="text-heading text-center">{description}</div>
            </div>
          )
        })}
      </div>
    </Container>
  )
}