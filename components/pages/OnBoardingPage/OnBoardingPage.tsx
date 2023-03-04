import React from "react"
import { PageBlock } from "../../../lib/cms/types/page"
import { Blocks } from "../common/Blocks"

type OnBoardingPageProps = {
  blocks: PageBlock[]
  title: string
}

const OnBoardingPage: React.FC<OnBoardingPageProps> = ({ blocks, title }) => {
  return <Blocks blocks={blocks} />
}

export default OnBoardingPage