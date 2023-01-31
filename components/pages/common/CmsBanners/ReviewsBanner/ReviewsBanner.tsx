import React, { useRef, useState } from "react"
import { ReviewsBannerData } from "../../../../../lib/cms/types/page"
import { Container } from "../../UI/Container"
import Image from "next/image"
import { useKeenSlider } from 'keen-slider/react'
import s from './ReviewsBanner.module.css'
import Quote from '../../../../icons/quote.svg'
import cn from 'clsx'
import { Arrow } from "../../../../icons/Arrow/Arrow"

type ReviewsBannerProps = {
  data: ReviewsBannerData
}

export const ReviewsBanner: React.FC<ReviewsBannerProps> = ({ data }) => {
  const { reviews, title } = data

  const [isMounted, setIsMounted] = useState(false)

  const [ref, sliderRef] = useKeenSlider({
    initial: 0,
    loop: true,
    slides: {
      perView: 2,
    },
    created() {
      setIsMounted(true)
    },

  })

  return (
    <Container>
      <div className="my-10 overflow-hidden">
        <div className="flex justify-between">
          <div className="text-[2.8rem] font-bold font-secondary">{title}</div>
          {isMounted && sliderRef.current && (
            <div className="w-40 h-20 flex gap-4">
              <div className="flex items-center justify-center w-12 h-12 bg-[rgba(0,0,0,.05)] rounded-full">
                <Arrow
                  left
                  onClick={(e: React.MouseEvent<SVGSVGElement>) => {
                    e.stopPropagation()
                    sliderRef.current?.prev()
                  }
                  }
                />
              </div>
              <div className="flex items-center justify-center w-12 h-12 bg-[rgba(0,0,0,.05)] rounded-full">
                <Arrow
                  onClick={(e: React.MouseEvent<SVGSVGElement>) => {
                    e.stopPropagation()
                    sliderRef.current?.next()
                  }
                  }
                />
              </div>
            </div>
          )}
        </div>
        <div ref={ref} className={s.slider}>
          {reviews.map(({ description, image, name, position, surname }, index) => {
            return (
              <div key={index} className={cn(s.sliderItem, `width-[${100 / reviews.length}vw]`, `keen-slider__slide number-slide${index}`)}>
                <div className={s.imageWrapper}>
                  <Image src={image?.url || ''} alt={image?.alternativeText || ''} width={100} height={100} style={{ borderRadius: '99999px' }} />
                </div>
                <div className="mb-2 ml-1">
                  <Image src={Quote} alt="quote" width={24} height={18} />
                </div>
                <div className="">{description}</div>
                <div className={s.initials}>{name} {surname}</div>
                <div>{position}</div>
              </div>
            )
          })}
        </div>
      </div>
    </Container>
  )
}