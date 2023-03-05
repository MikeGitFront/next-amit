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
          <Image src={mainImage?.url || ''} alt={mainImage?.alternativeText || ''} width={mainImage?.width} height={mainImage?.height} />
          <Image className={s.animatedFirst} src={secondaryImages?.[0]?.url || ''} alt={secondaryImages?.[0]?.alternativeText || ''} width={secondaryImages?.[0].width} height={secondaryImages?.[0].height} />
          <Image className={s.animatedSecond} src={secondaryImages?.[1]?.url || ''} alt={secondaryImages?.[1]?.alternativeText || ''} width={secondaryImages?.[1].width} height={secondaryImages?.[1].height} />
          <Image className={s.animatedThird} src={secondaryImages?.[2]?.url || ''} alt={secondaryImages?.[2]?.alternativeText || ''} width={secondaryImages?.[2].width} height={secondaryImages?.[2].height} />
          <Image className={s.animatedFourth} src={secondaryImages?.[3]?.url || ''} alt={secondaryImages?.[3]?.alternativeText || ''} width={secondaryImages?.[3].width} height={secondaryImages?.[3].height} />
        </div>
      </div>
    </Container>
  )
}
