import Image from 'next/image'
import React from 'react'
import { InfoBannerData } from '../../../../../lib/cms/types/page'
import { Button } from '../../UI/Button'
import { Container } from '../../UI/Container'

import s from './InfoBanner.module.css'

type InfoBannerProps = {
  data: InfoBannerData
}

export const InfoBanner: React.FC<InfoBannerProps> = ({ data }) => {
  const { title, description, button, mainImage, secondaryImages } = data
  return (
    <Container>
      <div className="flex flex-col md:flex-row md:items-center items-start justify-between">
        <div className="flex flex-col items-start md:w-[41.667%] pt-16">
          <span className="text-[20px] text-heading">{title}</span>
          <span className="text-[34px] md:text-5xl font-bold max-w-lg py-4 font-secondary mb-2">{description}</span>
          <Button type={button?.buttonType} href={button?.href}>
            {button?.label}
          </Button>
        </div>
        <div className={s.images}>
          <Image src={mainImage?.url || ''} alt={mainImage?.alternativeText || ''} width={400} height={260} />
        </div>
      </div>
    </Container>
  )
}
