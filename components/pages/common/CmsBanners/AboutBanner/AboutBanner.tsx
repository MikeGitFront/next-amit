import React from "react"
import { AboutBannerData } from "../../../../../lib/cms"
import { Container } from "../../UI/Container"

type AboutBannerProps = {
  data: AboutBannerData
}

export const AboutBanner: React.FC<AboutBannerProps> = ({ data }) => {
  const { items, description, image, isReversed, theme, title } = data

  return (
    <Container>

    </Container>
  )
}