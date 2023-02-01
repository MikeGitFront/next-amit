import Image from "next/image"
import React from "react"
import { ImageDescBannerData } from "../../../../../lib/cms"
import { Container } from "../../UI/Container"
import s from './ImageDescBanner.module.css'

type ImageDescBannerProps = {
  data: ImageDescBannerData
}

export const ImageDescBanner: React.FC<ImageDescBannerProps> = ({ data }) => {
  const { description, image } = data

  return (
    <Container>
      <div className="w-full">
        <Image src={image?.url || ''} alt={image?.alternativeText || ''} width={1440} height={306} />
        <div className={s.desc}>{description}</div>
      </div>
    </Container>
  )
}