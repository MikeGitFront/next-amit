import React from 'react'
import { BlockType, PageBlock } from '../../../../lib/cms/types/page'
import { InfoBanner, ProjectsBanner } from '../CmsBanners'


type BlocksProps = {
  blocks: PageBlock[]
}

export const Blocks: React.FC<BlocksProps> = ({ blocks }) => {
  console.log('blocksb;cokssa', blocks)
  return blocks.map(block => {
    switch (block.type) {
      case BlockType.InfoBanner: 
        return <InfoBanner data={block.data} />
      case BlockType.ProjectsBanner:
        return <ProjectsBanner data={block.data} />
      case BlockType.NoType: 
      return null
      default: null
    }
  })
}