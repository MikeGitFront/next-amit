import Image from "next/image"
import React from "react"
import { OnBoardingPromoBannerData } from "../../../../../lib/cms"
import { Button } from "../../UI/Button"
import { Container } from "../../UI/Container"
import s from './OnBoardingPromoBanner.module.css'

export type OnBoardingPromoBannerProps = {
  data: OnBoardingPromoBannerData
}

export const OnBoardingPromoBanner: React.FC<OnBoardingPromoBannerProps> = ({ data }) => {
  const { button, description, title, bgImage, images, label, mainImage } = data
  return (
    <Container>
      <div className="my-8 flex min-h-[428px]">
        <div className="flex flex-col justify-center w-[50%]">
          <div className="text-text-primary mb-2 pb-4">{label}</div>
          <div className="text-5xl font-bold text-text-primary font-secondary max-w-[28rem] mb-2 pb-4">{title}</div>
          <div className="max-w-[24rem] mb-2 pb-4 text-heading">{description}</div>
          <Button type={button?.buttonType} href={button?.href || ''}>{button?.label}</Button>
        </div>
        <div className="w-[50%] relative flex flex-col items-center justify-center">
         <Image className="static" src={mainImage?.url || ''} alt={mainImage?.alternativeText || ''} width={mainImage?.width} height={mainImage?.height} />
         <Image className={s.bg} src={bgImage?.url || ''} alt={bgImage?.alternativeText || ''} width={bgImage?.width} height={bgImage?.height} />
         {images?.map((image, index) => {
          return (
            <Image key={index} className="absolute" src={image?.url || ''} alt={image?.alternativeText || ''} width={image?.width} height={image?.height} />
          )
         })}
        </div>
      </div>
    </Container>
  )
}