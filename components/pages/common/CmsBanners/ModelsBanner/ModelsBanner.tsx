import React from "react"
import { ModelsBannerData } from "../../../../../lib/cms"
import { Container } from "../../UI/Container"

type ModelsBannerProps = {
  data: ModelsBannerData
}

export const ModelsBanner: React.FC<ModelsBannerProps> = ({ data }) => {
  const { description, items, title } = data

  return (
    <Container>

    </Container>
  )
}