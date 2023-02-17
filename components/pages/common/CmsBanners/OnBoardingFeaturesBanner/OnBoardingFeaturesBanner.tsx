import React from "react"
import { OnBoardingFeaturesBannerData } from "../../../../../lib/cms"
import { Container } from "../../UI/Container"
import CheckMark from '../../../../icons/check-mark.png'
import Image from "next/image"
import { Button } from "../../UI/Button"

export type OnBoardingFeaturesBannerProps = {
  data: OnBoardingFeaturesBannerData
}

const BUTTONS_AMOUNT = ['0','0','0'].fill('GET A QUOTE' as never, 0, 3) as string[]

export const OnBoardingFeaturesBanner: React.FC<OnBoardingFeaturesBannerProps> = ({ data }) => {
  const { description, title, headers, rows } = data
  return (
    <Container>
      <div className="flex flex-col items-center mb-16">
        <div className="text-text-primary text-[2.8rem] font-bold font-secondary pb-2 mb-2">{title}</div>
        <div className="text-heading pb-2 mb-2">{description}</div>
        <div className="grid grid-cols-[repeat(4,1fr)] text-text-primary w-full max-w-[72rem]">
          <div className="col-span-1 min-h-[3rem]"></div>
          {headers.map((text, index) => {
            return (
              <div key={index} className="min-h-[3rem] text-[20px] fron-bold flex items-center justify-center">{text}</div>
            )
          })}
          {rows.map(({ items }) => items.map((item, index) =>
            <div key={index} className={`border px-1 flex items-center ${index % 4 === 0 && 'font-semibold'} justify-${index % 4 !== 0 ? 'center' : 'start'} min-h-[3rem] border-gray-6`}>
              {item === 'yes' ? <Image src={CheckMark} alt="check mark icon" width={18} height={14} /> : item}
            </div>))}
          <div className="col-span-1 min-h-[3rem]"></div>
          {BUTTONS_AMOUNT.map(text => <div className="flex items-center justify-center mt-4 col-span-1 min-h-[3rem]"><Button href="/contact-us" type="primary">{text}</Button></div>)}
        </div>
      </div>
    </Container>
  )
}