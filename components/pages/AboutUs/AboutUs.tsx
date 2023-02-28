import React from "react"
import { PageBlock } from '../../../lib/cms/types/page'
import { Blocks } from "../common/Blocks"

type AboutUsPageProps = {
  blocks: PageBlock[]
  title: string
}

const AboutUsPage: React.FC<AboutUsPageProps> = ({ blocks, title }) => {
  return <Blocks blocks={blocks} />
}

export default AboutUsPage