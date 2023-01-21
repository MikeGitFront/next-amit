import { GetPageContentQuery } from "../../../generated/schema"
import { BlockType, PageBlock } from "../types/page"
import { normalizeButton, normalizeImage } from "./shared"

type CmsContentBlock = NonNullable<NonNullable<NonNullable<NonNullable<GetPageContentQuery['pages']>['data'][0]['attributes']>['blocks']>[0]>

type NormalizeBlock<T> = (block: T) => PageBlock

type CreateContentBlockHandler = <T extends CmsContentBlock>(params: {
  normalizeBlock: NormalizeBlock<T & CmsContentBlock>
}) => {
  normalizeBlock: typeof params.normalizeBlock
}

const createContentBlockHandler: CreateContentBlockHandler = (params) => {
  const { normalizeBlock } = params
  return {
    normalizeBlock,
  }
}

const infoBannerBlock = createContentBlockHandler<{ __typename: 'ComponentBlocksInfoBanner' }>({
  normalizeBlock: (contentBlock) => {
    const { button, description, mainImage, title, secondaryImages } = contentBlock
    return {
      type: BlockType.InfoBanner,
      data: {
        title: title || '',
        description: description || '',
        button: button ? normalizeButton(button) : null
      }
    }
  }
})

const projectsBanner = createContentBlockHandler<{ __typename: 'ComponentBlocksProjectsBanner' }>({
  normalizeBlock: (contentBlock) => {
    const { image, mainDescription, projects, text, title } = contentBlock
    return {
      type: BlockType.ProjectsBanner,
      data: {
        title: title || '',
        text: (text || []).map(text => text?.description || ''),
        image: image ? normalizeImage(image) : null,
        mainDescription: mainDescription || '',
        projects: (projects || []).map(item => ({
          image: image ? normalizeImage(item?.image) : null,
          title: item?.title || '',
          description: item?.description || '',
        }))
      }
    }
  }
})



const blockHandlers = {
  ComponentBlocksInfoBanner: infoBannerBlock,
  // ComponentBlocksFeaturedBanner: infoBannerBlock,
  // ComponentBlocksBlogBanner: infoBannerBlock,
  ComponentBlocksProjectsBanner: projectsBanner,
  // ComponentBlocksPromoBanner: infoBannerBlock,
  // ComponentBlocksReviewsBanner: infoBannerBlock,
  // ComponentBlocksServicesBanner: infoBannerBlock,
  // ComponentBlocksStartBanner: infoBannerBlock,
}

type BlockHandlers = typeof blockHandlers

const createContentHadnler = ({ blockHandlersMap }: { blockHandlersMap: BlockHandlers }) => {
  const normalizeBlock = (contentBlock: CmsContentBlock): PageBlock => {
    if (contentBlock.__typename === 'Error') {
      return {
        type: BlockType.NoType,
      }
    }
    // @ts-ignore
    const blockHandler = blockHandlersMap[contentBlock.__typename]
    if (blockHandler) {
      return blockHandler.normalizeBlock(contentBlock)
    }
    return {
      type: BlockType.NoType,
    }
  }

  return {
    normalizeBlock,
  }
}

export const contentHandler = createContentHadnler({
  blockHandlersMap: blockHandlers,
})