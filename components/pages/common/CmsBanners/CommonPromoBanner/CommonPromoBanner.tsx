import React from "react"
import { CommonPromoBannerData } from "../../../../../lib/cms"
import { Button } from "../../UI/Button"
import { Container } from "../../UI/Container"
import s from './CommonPromoBanner.module.css'
import cn from 'clsx'
import Image from "next/image"

export type CommonPromoBannerProps = {
  data: CommonPromoBannerData
}

export const CommonPromoBanner: React.FC<CommonPromoBannerProps> = ({ data }) => {
  const { button, description, image, title } = data
  return (
    <Container className="mb-0">
      <div className={cn(s.bgWrapper, "relative")}>
        <div className={s.bg}>
          <Image src={image?.url || ''} alt={image?.alternativeText || ''} width={image?.width} height={image?.height} />
        </div>
        <div className="flex flex-col items-center min-h-[15rem] pt-8 px-6 gap-4">
          <div className="font-bold font-secondary text-text-primary text-[2.8rem]">{title}</div>
          <div className="text-heading">{description}</div>
          <Button href={button?.href} type={button?.buttonType}>{button?.label}</Button>
        </div>
      </div>
    </Container>
  )
}