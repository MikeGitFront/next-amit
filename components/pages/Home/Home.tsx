import React from 'react'
import { PageBlock } from '../../../lib/cms/types/page'
import { Blocks } from '../common/Blocks'

type HomePageProps = {
  blocks: PageBlock[]
}

const HomePage: React.FC<HomePageProps> = ({ blocks }) => {
  return <Blocks blocks={blocks} />
}

export default HomePage
