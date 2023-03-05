import Image from 'next/image'
import React from 'react'
import { OnBoardingPromoBannerData } from '../../../../../lib/cms'
import { useScreenWidth } from '../../../../hooks/useScreenWidth'
import { Button } from '../../UI/Button'
import { Container } from '../../UI/Container'
import s from './OnBoardingPromoBanner.module.css'

export type OnBoardingPromoBannerProps = {
  data: OnBoardingPromoBannerData
}

export const OnBoardingPromoBanner: React.FC<OnBoardingPromoBannerProps> = ({ data }) => {
  const { button, description, title, bgImage, images, label, mainImage } = data
  const { lg } = useScreenWidth()
  return (
    <Container>
      <div className="my-8 flex flex-col md:flex-row min-h-[428px]">
        <div className="flex flex-col justify-center md:w-[50%]">
          <div className="text-text-primary mb-2 pb-4">{label}</div>
          <div className="text-5xl font-bold text-text-primary font-secondary max-w-[28rem] mb-2 pb-4">{title}</div>
          <div className="max-w-[24rem] mb-2 pb-4 text-heading">{description}</div>
          <Button type={button?.buttonType} href={button?.href || ''}>
            {button?.label}
          </Button>
        </div>
        <div className="md:w-[50%] mt-16 md:mt-0 relative flex flex-col items-center justify-center">
          <Image
            className="static -z-10"
            src={mainImage?.url || ''}
            alt={mainImage?.alternativeText || ''}
            width={mainImage?.width}
            height={mainImage?.height}
          />
          <Image
            className={s.bg}
            src={bgImage?.url || ''}
            alt={bgImage?.alternativeText || ''}
            width={bgImage?.width}
            height={bgImage?.height}
          />
          { lg && <Image className={s.animatedFirst} src={images?.[0]?.url || ''} alt={images?.[0]?.alternativeText || ''} width={images?.[0].width} height={images?.[0].height} />}
          { lg && <Image className={s.animatedSecond} src={images?.[1]?.url || ''} alt={images?.[1]?.alternativeText || ''} width={images?.[1].width} height={images?.[1].height} />}
          { lg && <Image className={s.animatedThird} src={images?.[2]?.url || ''} alt={images?.[2]?.alternativeText || ''} width={images?.[2].width} height={images?.[2].height} />}
          {lg && <Image className={s.animatedFourth} src={images?.[3]?.url || ''} alt={images?.[3]?.alternativeText || ''} width={images?.[3].width} height={images?.[3].height} />}
          { lg &&<Image className={s.animatedFifth} src={images?.[4]?.url || ''} alt={images?.[4]?.alternativeText || ''} width={images?.[4].width} height={images?.[4].height} />}
        </div>
      </div>
    </Container>
  )
}
