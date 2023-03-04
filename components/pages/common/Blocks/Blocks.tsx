import React from "react"
import { BlockType, PageBlock } from "../../../../lib/cms/types/page"
import {
  InfoBanner,
  ProjectsBanner,
  BlogBanner,
  FeaturedBanner,
  PromoBanner,
  ReviewsBanner,
  ServicesBanner,
  StartBanner,
  TitleBanner,
  ShowOffBanner,
  ModelsBanner,
  AboutBanner,
  FactsBanner,
  ImageDescBanner,
  ContactUsInfoBanner,
  CommonPromoBanner,
  OnBoardingPromoBanner,
  OnBoardingChooseBanner,
  OnBoardingFeaturesBanner,
  OnBoardingQABanner,
  OnBoardingCreateStoreBanner,
  ClientBanner,
  AboutProjectBanner,
  HeadingBanner,
  RichTextBanner,
  CrossPlatformBanner,
  IntegrationBanner,
  ComponentsTableBanner
} from "../CmsBanners"

type BlocksProps = {
  blocks: PageBlock[]
}

export const Blocks: React.FC<BlocksProps> = ({ blocks }) => {
  return (
    <>
      {blocks.map((block, index) => {
        switch (block.type) {
          case BlockType.TitleBanner:
            return <TitleBanner key={index} data={block.data} />
          case BlockType.InfoBanner:
            return <InfoBanner key={index} data={block.data} />
          case BlockType.ProjectsBanner:
            return <ProjectsBanner key={index} data={block.data} />
          case BlockType.ServicesBanner:
            return <ServicesBanner key={index} data={block.data} />
          case BlockType.PromoBanner:
            return <PromoBanner key={index} data={block.data} />
          case BlockType.StartBanner:
            return <StartBanner key={index} data={block.data} />
          case BlockType.ReviewsBanner:
            return <ReviewsBanner key={index} data={block.data} />
          case BlockType.FeaturedBanner:
            return <FeaturedBanner key={index} data={block.data} />
          case BlockType.BlogBanner:
            return <BlogBanner key={index} data={block.data} />
          case BlockType.ImageDescBanner:
            return <ImageDescBanner key={index} data={block.data} />
          case BlockType.FactsBanner:
            return <FactsBanner key={index} data={block.data} />
          case BlockType.AboutBanner:
            return <AboutBanner key={index} data={block.data} />
          case BlockType.ModelsBanner:
            return <ModelsBanner key={index} data={block.data} />
          case BlockType.ShowOffBanner:
            return <ShowOffBanner key={index} data={block.data} />
          case BlockType.ContactUsInfoBanner:
            return <ContactUsInfoBanner key={index} data={block.data} />
          case BlockType.OnBoardingPromoBanner:
            return <OnBoardingPromoBanner key={index} data={block.data} />
          case BlockType.OnBoardingChooseBanner:
            return <OnBoardingChooseBanner key={index} data={block.data} />
          case BlockType.OnBoardingFeaturesBanner:
            return <OnBoardingFeaturesBanner key={index} data={block.data} />
          case BlockType.OnBoardingQABanner:
            return <OnBoardingQABanner key={index} data={block.data} />
          case BlockType.OnBoardingCreateStoreBanner:
            return <OnBoardingCreateStoreBanner key={index} data={block.data} />
          case BlockType.CommonPromoBanner:
            return <CommonPromoBanner key={index} data={block.data} />
          case BlockType.ClientBanner:
            return <ClientBanner key={index} data={block.data} />
          case BlockType.AboutProjectBanner:
            return <AboutProjectBanner key={index} data={block.data} />
          case BlockType.HeadingBanner:
            return <HeadingBanner key={index} data={block.data} />
          case BlockType.RichTextBanner:
            return <RichTextBanner key={index} data={block.data} />
          case BlockType.CrossPlatformBanner:
            return <CrossPlatformBanner key={index} data={block.data} />
          case BlockType.IntegrationBanner:
            return <IntegrationBanner key={index} data={block.data} />
          case BlockType.ComponentsTableBanner:
            return <ComponentsTableBanner key={index} data={block.data} />
          case BlockType.NoType:
            return null
          default: null
        }
      })}
    </>
  )
}