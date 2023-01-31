import React from "react"
import { FactsBannerData } from "../../../../../lib/cms"
import { Container } from "../../UI/Container"

type FactsBannerProps = {
  data: FactsBannerData
}

export const FactsBanner: React.FC<FactsBannerProps> = ({ data }) => {
  const { items } = data

  return (
    <Container>

    </Container>
  )
}