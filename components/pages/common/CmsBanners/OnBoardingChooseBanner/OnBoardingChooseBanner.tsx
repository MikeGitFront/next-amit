import Image from "next/image"
import React from "react"
import { OnBoardingChooseBannerData } from "../../../../../lib/cms"
import { Container } from "../../UI/Container"

export type OnBoardingChooseBannerProps = {
  data: OnBoardingChooseBannerData
}

export const OnBoardingChooseBanner: React.FC<OnBoardingChooseBannerProps> = ({ data }) => {
  const { description, title, items, subtitle } = data
  return (
    <Container>
      <div className="my-16 md:my-8 flex flex-col">
        <div className="flex my-12 flex-col justify-center items-center text-text-primary">
          <div className="mb-10 font-bold font-secondary text-4xl md:text-[2.8rem]">{title}</div>
          <div className="text-center text-xl max-w-[75%]">{description}</div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="font-semibold font-secondary text-[28px]">{subtitle}</div>
          <div className="max-w-[90%] md:max-w-[60%] grid grid-cols-2 md:grid-cols-3 w-full my-6 mb-10">{items.map(({ image, title }, index) => {
            return (
              <div key={index} className={`w-[${100 / items.length}%] col-span-1 flex flex-col items-center text-center justify-start`}>
                <div className="w-[50px] h-[70px]">
                  <Image src={image?.url || ""} alt={image?.alternativeText || ""} width={50} height={50} />
                </div>
                <div className="text-heading w-[9rem] text-center">{title}</div>
              </div>
            )
          })}</div>
        </div>
      </div>
    </Container>
  )
}