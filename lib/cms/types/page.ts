import { Image, Link } from './shared'

export enum BlockType {
  TitleBanner = 'TitleBanner',
  InfoBanner = 'InfoBanner',
  ProjectsBanner = 'ProjectsBanner',
  ServicesBanner = 'ServicesBanner',
  PromoBanner = 'PromoBanner',
  StartBanner = 'StartBanner',
  ReviewsBanner = 'ReviewsBanner',
  FeaturedBanner = 'FeaturedBanner',
  BlogBanner = 'BlogBanner',
  ImageDescBanner = 'ImageDescBanner',
  FactsBanner = 'FactsBanner',
  AboutBanner = 'AboutBanner',
  ModelsBanner = 'ModelsBanner',
  ShowOffBanner = 'ShowOffBanner',
  ContactUsInfoBanner = 'ContactUsInfoBanner',
  OnBoardingPromoBanner = 'OnBoardingPromoBanner',
  OnBoardingChooseBanner = 'OnBoardingChooseBanner',
  OnBoardingFeaturesBanner = 'OnBoardingFeaturesBanner',
  OnBoardingQABanner = 'OnBoardingQABanner',
  OnBoardingCreateStoreBanner = 'OnBoardingCreateStoreBanner',
  CommonPromoBanner = 'CommonPromoBanner',
  ClientBanner = 'ClientBanner',
  AboutProjectBanner = 'AboutProjectBanner',
  HeadingBanner = 'HeadingBanner',
  RichTextBanner = 'RichTextBanner',
  CrossPlatformBanner = 'CrossPlatformBanner',
  ComponentsTableBanner = 'ComponentsTableBanner',
  IntegrationBanner = 'IntegrationBanner',
  NoType = 'NoType',
}

export enum ButtonType {
  Primary = 'primary',
  Secondary = 'secondary',
}

export type TitleBannerData = {
  title: string
}

export type TitleBanner = {
  type: BlockType.TitleBanner
  data: TitleBannerData
}

export type InfoBannerData = {
  title: string
  description: string
  button: Link | null
  mainImage: Image | null
  secondaryImages: Image[] | null
}

export type InfoBanner = {
  type: BlockType.InfoBanner
  data: InfoBannerData
}

export type ProjectsBannerData = {
  mainDescription: string
  text: string[]
  title: string
  image: Image | null
  projects: {
    image: Image | null
    title: string
    description: string
  }[]
}

export type ProjectsBanner = {
  type: BlockType.ProjectsBanner
  data: ProjectsBannerData
}

export type ServicesBannerData = {
  tabs: {
    image: Image | null
    title: string
    content: {
      title: string
      description: string
      image: Image | null
    }
  }[]
}

export type ServicesBanner = {
  type: BlockType.ServicesBanner
  data: ServicesBannerData
}

export type PromoBannerData = {
  advertisementLabel: string
  image: Image | null
  title: string
  description: string
  button: Link | null
}

export type PromoBanner = {
  type: BlockType.PromoBanner
  data: PromoBannerData
}

export type StartBannerData = {
  title: string
  items: string[]
  image: Image | null
  description: string
  isReversed: boolean
  button: Link | null
}

export type StartBanner = {
  type: BlockType.StartBanner
  data: StartBannerData
}

export type ReviewsBannerData = {
  title: string
  reviews: {
    image: Image | null
    description: string
    name: string
    surname: string
    position: string
  }[]
}

export type ReviewsBanner = {
  type: BlockType.ReviewsBanner
  data: ReviewsBannerData
}

export type FeaturedBannerData = {
  title: string
  link: Link | null
}

export type FeaturedBanner = {
  type: BlockType.FeaturedBanner
  data: FeaturedBannerData
}

export type BlogBannerData = {
  items: {
    image: Image | null
    title: string
    description: string
    link: Link | null
  }[]
}

export type BlogBanner = {
  type: BlockType.BlogBanner
  data: BlogBannerData
}

export type ImageDescBannerData = {
  image: Image | null
  description: string
}

export type ImageDescBanner = {
  type: BlockType.ImageDescBanner
  data: ImageDescBannerData
}

export type FactsBannerData = {
  items: {
    image: Image | null
    title: string
    description: string
  }[]
}

export type FactsBanner = {
  type: BlockType.FactsBanner
  data: FactsBannerData
}

export type AboutBannerData = {
  theme: string
  title: string
  isReversed: boolean
  description: string
  image: Image | null
  items: {
    item: string
  }[]
}

export type AboutBanner = {
  type: BlockType.AboutBanner
  data: AboutBannerData
}
export type ModelsBannerData = {
  title: string
  description: string
  items: {
    title: string
    image: Image | null
  }[]
}

export type ModelsBanner = {
  type: BlockType.ModelsBanner
  data: ModelsBannerData
}
export type ShowOffBannerData = {
  title: string
  items: {
    item: string
  }[]
}

export type ShowOffBanner = {
  type: BlockType.ShowOffBanner
  data: ShowOffBannerData
}

export type ContactUsInfoBannerData = {
  title: string
  items: {
    image: Image | null
    title: string
    items: {
      text: string
    }[]
  }[]
}

export type ContactUsInfoBanner = {
  type: BlockType.ContactUsInfoBanner
  data: ContactUsInfoBannerData
}

export type CommonPromoBannerData = {
  title: string
  description: string
  image: Image | null
  button: Link | null
}

export type CommonPromoBanner = {
  type: BlockType.CommonPromoBanner
  data: CommonPromoBannerData
}

export type OnBoardingPromoBannerData = {
  label: string
  title: string
  description: string
  images: Image[] | null
  button: Link | null
  mainImage: Image | null
  bgImage: Image | null
}

export type OnBoardingPromoBanner = {
  type: BlockType.OnBoardingPromoBanner
  data: OnBoardingPromoBannerData
}

export type OnBoardingChooseBannerData = {
  title: string
  description: string
  subtitle: string
  items: {
    image: Image | null
    title: string
    description: string
  }[]
}

export type OnBoardingChooseBanner = {
  type: BlockType.OnBoardingChooseBanner
  data: OnBoardingChooseBannerData
}

export type OnBoardingFeaturesBannerData = {
  title: string
  description: string
  headers: string[]
  rows: { items: string[] }[]
}

export type OnBoardingFeaturesBanner = {
  type: BlockType.OnBoardingFeaturesBanner
  data: OnBoardingFeaturesBannerData
}

export type OnBoardingQABannerData = {
  title: string
  items: {
    image: Image | null
    title: string
    description: string
  }[]
}

export type OnBoardingQABanner = {
  type: BlockType.OnBoardingQABanner
  data: OnBoardingQABannerData
}

export type OnBoardingCreateStoreBannerData = {
  button: Link | null
}

export type OnBoardingCreateStoreBanner = {
  type: BlockType.OnBoardingCreateStoreBanner
  data: OnBoardingCreateStoreBannerData
}

export type ClientBannerData = {
  items: {
    image: Image | null
    title: string
    description: string
  }[]
  images: Image[] | null
}

export type ClientBanner = {
  type: BlockType.ClientBanner
  data: ClientBannerData
}

export type AboutProjectBannerData = {
  title: string
  description: string
}

export type AboutProjectBanner = {
  type: BlockType.AboutProjectBanner
  data: AboutProjectBannerData
}

export type HeadingBannerData = {
  text: string
}

export type HeadingBanner = {
  type: BlockType.HeadingBanner
  data: HeadingBannerData
}

export type RichTextBannerData = {
  text: string
}

export type RichTextBanner = {
  type: BlockType.RichTextBanner
  data: RichTextBannerData
}

export type CrossPlatformBannerData = {
  title: string
  description: string
  image: Image | null
}

export type CrossPlatformBanner = {
  type: BlockType.CrossPlatformBanner
  data: CrossPlatformBannerData
}

export type ComponentsTableBannerData = {
  title: string
  description: string
  headers: string[]
  rows: { items: string[] }[]
}

export type ComponentsTableBanner = {
  type: BlockType.ComponentsTableBanner
  data: ComponentsTableBannerData
}

export type IntegrationBannerData = {
  title: string
  description: string
  image: Image | null
}

export type IntegrationBanner = {
  type: BlockType.IntegrationBanner
  data: IntegrationBannerData
}

export type PageBlock =
  | InfoBanner
  | ProjectsBanner
  | ServicesBanner
  | PromoBanner
  | StartBanner
  | ReviewsBanner
  | FeaturedBanner
  | BlogBanner
  | TitleBanner
  | ImageDescBanner
  | FactsBanner
  | AboutBanner
  | ModelsBanner
  | ShowOffBanner
  | ContactUsInfoBanner
  | OnBoardingPromoBanner
  | OnBoardingChooseBanner
  | CommonPromoBanner
  | OnBoardingFeaturesBanner
  | OnBoardingQABanner
  | OnBoardingCreateStoreBanner
  | ClientBanner
  | AboutProjectBanner
  | HeadingBanner
  | RichTextBanner
  | CrossPlatformBanner
  | ComponentsTableBanner
  | IntegrationBanner
  | { type: BlockType.NoType }
