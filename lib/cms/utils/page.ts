import { GetPageContentQuery } from "../../../generated/schema"
import { BlockType, PageBlock } from "../types/page"
import { normalizeButton, normalizeImage, normalizeLink } from "./shared"

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

const titleBannerBlock = createContentBlockHandler<{ __typename: 'ComponentCommonTitleBlock' }>({
  normalizeBlock: (contentBlock) => {
    const { title } = contentBlock

    return {
      type: BlockType.TitleBanner,
      data: {
        title: title || '',
      }
    }
  }
})

const infoBannerBlock = createContentBlockHandler<{ __typename: 'ComponentBlocksInfoBanner' }>({
  normalizeBlock: (contentBlock) => {
    const { button, description, mainImage, title, secondaryImages } = contentBlock

    const secondaryImagesData = secondaryImages?.data || []
    return {
      type: BlockType.InfoBanner,
      data: {
        title: title || '',
        description: description || '',
        button: button ? normalizeButton(button) : null,
        mainImage: mainImage ? normalizeImage(mainImage) : null,
        secondaryImages: secondaryImagesData.length > 0 ? secondaryImagesData.map(normalizeImage) : null,
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

const servicesBanner = createContentBlockHandler<{ __typename: 'ComponentBlocksServicesBanner' }>({
  normalizeBlock: (contentBlock) => {
    const { tabs } = contentBlock

    return {
      type: BlockType.ServicesBanner,
      data: {
        tabs: (tabs || []).map(tab => ({
          image: tab?.image ? normalizeImage(tab.image) : null,
          title: tab?.title || '',
          content: {
            image: tab?.content?.image ? normalizeImage(tab.content.image) : null,
            description: tab?.content?.description || '',
            title: tab?.content?.title || '',
          }
        }))
      }
    }
  }
})

const promoBanner = createContentBlockHandler<{ __typename: 'ComponentBlocksPromoBanner' }>({
  normalizeBlock: (contentBlock) => {
    const { advertisementLabel, image, description, title, button } = contentBlock
    return {
      type: BlockType.PromoBanner,
      data: {
        advertisementLabel: advertisementLabel || '',
        image: image ? normalizeImage(image) : null,
        title: title || '',
        description: description || '',
        button: button ? normalizeButton(button) : null,
      }
    }
  }
})

const startBanner = createContentBlockHandler<{ __typename: 'ComponentBlocksStartBanner' }>({
  normalizeBlock: (contentBlock) => {
    const { button, description, image, isReversed, items, title } = contentBlock
    return {
      type: BlockType.StartBanner,
      data: {
        button: button ? normalizeButton(button) : null,
        image: image ? normalizeImage(image) : null,
        isReversed: isReversed || false,
        items: items && items.length > 0 ? items.map(item => item?.promoText || '') : [],
        title: title || '',
        description: description || '',
      }
    }
  }
})

const reviewsBanner = createContentBlockHandler<{ __typename: 'ComponentBlocksReviewsBanner' }>({
  normalizeBlock: (contentBlock) => {
    const { reviews, title } = contentBlock
    return {
      type: BlockType.ReviewsBanner,
      data: {
        title: title || '',
        reviews: reviews && reviews.length > 0 ? reviews.map((review) => ({
          description: review?.description || '',
          image: review?.image ? normalizeImage(review.image) : null,
          name: review?.name || '',
          position: review?.position || '',
          surname: review?.surname || '',
        })) : []
      }
    }
  }
})

const featuredBanner = createContentBlockHandler<{ __typename: 'ComponentBlocksFeaturedBanner' }>({
  normalizeBlock: (contentBlock) => {
    const { link, title } = contentBlock
    return {
      type: BlockType.FeaturedBanner,
      data: {
        title: title || '',
        link: link ? normalizeLink(link) : null
      }
    }
  }
})

const blogBanner = createContentBlockHandler<{ __typename: 'ComponentBlocksBlogBanner' }>({
  normalizeBlock: (contentBlock) => {
    const { items } = contentBlock
    return {
      type: BlockType.BlogBanner,
      data: {
        items: items && items.length > 0 ? items.map((item) => ({
          description: item?.description || '',
          image: item?.image ? normalizeImage(item.image) : null,
          title: item?.title || '',
          link: item?.link ? normalizeLink(item.link) : null
        })) : []
      }
    }
  }
})

const imageDescBanner = createContentBlockHandler<{ __typename: 'ComponentBlocksImageDescBanner' }>({
  normalizeBlock: (contentBlock) => {
    const { desc, image } = contentBlock
    return {
      type: BlockType.ImageDescBanner,
      data: {
        description: desc || '',
        image: image ? normalizeImage(image) : null,
      }
    }
  }
})

const factsBanner = createContentBlockHandler<{ __typename: 'ComponentBlocksFactsBanner' }>({
  normalizeBlock: (contentBlock) => {
    const { items } = contentBlock
    return {
      type: BlockType.FactsBanner,
      data: {
        items: items && items.length > 0 ? items.map((item) => ({
          description: item?.description || '',
          image: item?.image ? normalizeImage(item.image) : null,
          title: item?.title || '',
        })) : []
      }
    }
  }
})

const aboutBanner = createContentBlockHandler<{ __typename: 'ComponentBlocksAboutBanner' }>({
  normalizeBlock: (contentBlock) => {
    const { description, image, isReversed, items, theme, title } = contentBlock
    return {
      type: BlockType.AboutBanner,
      data: {
        description: description || '',
        title: title || '',
        image: image ? normalizeImage(image) : null,
        isReversed: isReversed || false,
        theme: theme || 'bright',
        items: items && items.length > 0 ? items.map(item => ({ item: item?.item || '' })) : []
      }
    }
  }
})

const modelsBanner = createContentBlockHandler<{ __typename: 'ComponentBlocksModelsBanner' }>({
  normalizeBlock: (contentBlock) => {
    const { description, title, items } = contentBlock
    return {
      type: BlockType.ModelsBanner,
      data: {
        description: description || '',
        title: title || '',
        items: items && items.length > 0 ? items.map((item) => ({
          image: item?.image ? normalizeImage(item.image) : null,
          title: item?.title || '',
        })) : []
      }
    }
  }
})

const showOffBanner = createContentBlockHandler<{ __typename: 'ComponentBlocksShowOffBanner' }>({
  normalizeBlock: (contentBlock) => {
    const { title, items } = contentBlock
    return {
      type: BlockType.ShowOffBanner,
      data: {
        title: title || '',
        items: items && items.length > 0 ? items.map(item => ({ item: item?.item || '' })) : []
      }
    }
  }
})

const blockHandlers = {
  ComponentCommonTitleBlock: titleBannerBlock,
  ComponentBlocksImageDescBanner: imageDescBanner,
  ComponentBlocksFactsBanner: factsBanner,
  ComponentBlocksAboutBanner: aboutBanner,
  ComponentBlocksModelsBanner: modelsBanner,
  ComponentBlocksShowOffBanner: showOffBanner,
  ComponentBlocksInfoBanner: infoBannerBlock,
  ComponentBlocksFeaturedBanner: featuredBanner,
  ComponentBlocksBlogBanner: blogBanner,
  ComponentBlocksProjectsBanner: projectsBanner,
  ComponentBlocksPromoBanner: promoBanner,
  ComponentBlocksReviewsBanner: reviewsBanner,
  ComponentBlocksServicesBanner: servicesBanner,
  ComponentBlocksStartBanner: startBanner,
}

type BlockHandlers = typeof blockHandlers

const createContentHadnler = ({ blockHandlersMap }: { blockHandlersMap: BlockHandlers }) => {
  const normalizeBlock = (contentBlock: CmsContentBlock): PageBlock => {
    if (contentBlock.__typename === 'Error') {
      return {
        type: BlockType.NoType,
      }
    }

    const blockHandler = blockHandlersMap[contentBlock.__typename]
    if (blockHandler) {
      // @ts-ignore
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