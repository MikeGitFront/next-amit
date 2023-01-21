import React from "react"
import { InfoBannerData } from "../../../../../lib/cms/types/page"

type InfoBannerProps = {
  data: InfoBannerData
}

export const InfoBanner: React.FC<InfoBannerProps> = ({ data }) => {
  const { title, description, button } = data
  return <div>HELLLO {title}</div>
}