import Image from 'next/image'
import React from 'react'
import { PromoBannerData } from '../../../../../lib/cms/types/page'
import { Button } from '../../UI/Button'

import s from './PromoBanner.module.css'

type PromoBannerProps = {
  data: PromoBannerData
}

export const PromoBanner: React.FC<PromoBannerProps> = ({ data }) => {
  const { advertisementLabel, button, description, image, title } = data
  return (
    <div className={s.wrapper}>
      <div className={s.content}>
        <div className="absolute left-[8%] -top-10 w-20 h-20 rounded-full flex items-center justify-center text-[#fff] uppercase text-2xl bg-[#89c12c]">
          {advertisementLabel}
        </div>
        <div className="flex flex-col">
          <div className="text-[2.8rem] text-[#fff] font-bold mb-2">{title}</div>
          <div className="text-base pb-4 text-[#fff]">{description}</div>
          <Button type={button?.buttonType} href={button?.href}>
            {button?.label.toUpperCase()}
          </Button>
        </div>
        <div className="absolute z-10 bottom-0 right-0">
          <Image src={image?.url || ''} alt={image?.alternativeText || ''} width={512} height={300} />
        </div>
      </div>
    </div>
  )
}
