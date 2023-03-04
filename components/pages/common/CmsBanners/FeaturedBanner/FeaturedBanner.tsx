import Link from "next/link"
import React from "react"
import { FeaturedBannerData } from "../../../../../lib/cms/types/page"
import { Container } from "../../UI/Container"

type FeaturedBannerProps = {
  data: FeaturedBannerData
}

export const FeaturedBanner: React.FC<FeaturedBannerProps> = ({ data }) => {
  const { link, title } = data
  return (
    <Container>
      <div className="flex justify-between items-center mb-4">
        <div className="text-4xl max-w-[50%] md:w-full md:text-[2.8rem] font-secondary font-bold">{title}</div>
        <Link href={link?.href || ""}>
          <div className="text-primary">{link?.label || ""}</div>
        </Link>
      </div>
    </Container>
  )
}