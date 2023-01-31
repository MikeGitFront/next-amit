import React from "react"
import { ShowOffBannerData } from "../../../../../lib/cms"
import { Container } from "../../UI/Container"

type ShowOffBannerProps = {
  data: ShowOffBannerData
}

export const ShowOffBanner: React.FC<ShowOffBannerProps> = ({ data }) => {
  const { items, title } = data

  return (
    <Container>

    </Container>
  )
}