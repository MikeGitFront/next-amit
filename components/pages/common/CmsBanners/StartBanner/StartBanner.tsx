import Image from "next/image"
import React from "react"
import { StartBannerData } from "../../../../../lib/cms/types/page"
import { Button } from "../../UI/Button"
import { Container } from "../../UI/Container"
import CheckMark from '../../../../icons/check-mark.png'

type StartBannerProps = {
  data: StartBannerData
}

export const StartBanner: React.FC<StartBannerProps> = ({ data }) => {
  const { button, description, image, isReversed, items, title } = data
  return (
    <Container>
      <div className={`flex flex-col gap-8 ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'} mb-16`}>
        <div className={`flex flex-col md:w-[50%] ${isReversed && 'md:pl-28'}`}>
          <div className="font-bold text-4xl md:text-[2.8rem] mb-2 font-secondary">{title}</div>
          <div className="block md:hidden md:w-[50%]">
            <Image src={image?.url || ''} alt={image?.alternativeText || ''} width={672} height={496} />
          </div>
          <h5 className="text-heading mb-6">{description}</h5>
          <div className="mb-4">
            {items.map((label, index) => {
              return (
                <div key={index} className="flex gap-4 items-center mb-3">
                  <div className="min-w-[4rem] h-16 rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(0,0,0,0.1)]">
                    <Image src={CheckMark} alt="check mark icon" width={24} height={22} />
                  </div>
                  <div className="text-text-primary font-semibold">{label}</div>
                </div>
              )
            })}
          </div>
          <Button type={button?.buttonType} href={button?.href || ''}>{button?.label.toUpperCase()}</Button>
        </div>
        <div className="hidden md:block md:w-[50%]">
          <Image src={image?.url || ''} alt={image?.alternativeText || ''} width={672} height={496} />
        </div>
      </div>
    </Container>
  )
}