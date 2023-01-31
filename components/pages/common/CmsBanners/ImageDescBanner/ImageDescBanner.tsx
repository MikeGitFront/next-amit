import React from "react"
import { ImageDescBannerData } from "../../../../../lib/cms"
import { Container } from "../../UI/Container"

type ImageDescBannerProps = {
  data: ImageDescBannerData
}

export const ImageDescBanner: React.FC<ImageDescBannerProps> = ({ data }) => {
  const { description, image } = data

  return (
    <Container>

    </Container>
  )
}