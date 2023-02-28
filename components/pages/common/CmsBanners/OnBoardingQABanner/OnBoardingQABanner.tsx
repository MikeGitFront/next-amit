import React, { useCallback, useMemo, useState } from "react"
import { OnBoardingQABannerData } from "../../../../../lib/cms"
import { Container } from "../../UI/Container"
import ArrowDown from '../../../../icons/arrow-down.svg'
import Image from "next/image"

export type OnBoardingQABannerProps = {
  data: OnBoardingQABannerData
}

export const OnBoardingQABanner: React.FC<OnBoardingQABannerProps> = ({ data }) => {
  const [itemsState, setItemsState] = useState(data.items.map((item, index) => ({ key: index, isActive: false, ...item })))
  const { title } = data

  const handleOpen = useCallback((key: number) => {
    setItemsState(prev => {
      const previousData = [...prev]
      const item = prev.find(item => item.key === key)!
      previousData.splice(previousData.indexOf(item), 1, { ...item, isActive: !item.isActive })
      return [...previousData]
    })
  }, [])
  return (
    <Container>
      <div className="pb-20">
        <div className="text-center font-bold font-secondary text-[2.8rem] pb-5">{title}</div>
        <div>
          {itemsState.map(({ isActive, description, image, title, key }, index) => {
            return (
              <div key={index} className="flex flex-col items-center justify-center">
                <button onClick={() => handleOpen(key)} className="border border-[#e5e7eb] mb-[0.6rem] w-full min-h-[3.75rem] shadow-[0_0_20px_rgba(0,0,0,.05)] flex text-2xl text-text-primary justify-between items-center cursor-pointer">
                  <div className="ml-6">{title}</div>
                  <div className="w-12"><Image src={ArrowDown} className={` ${isActive ? 'rotate-180' : ''}`} alt="check mark icon" width={18} height={14} /></div>
                </button>
                {isActive && (
                  <div className="w-full">
                    <div className="p-4 text-text-primary text-start">{description}</div>
                    {image && (<Image src={image.url} alt={image.alternativeText} width={image.width} height={image.height} />)}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </Container>
  )
}