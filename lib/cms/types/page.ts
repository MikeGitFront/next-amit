export type Link = {
  buttonType: 'primary' | 'secondary'
  label: string
  href: string
}

export type Image = {
  url: string
  altText: string
}

export enum BlockType {
  InfoBanner = 'InfoBanner',
  ProjectsBanner = 'ProjectsBanner',
  NoType = 'NoType',
}

export enum ButtonType {
  Primary = 'primary',
  Secondary = 'secondary',
}

export type InfoBannerData = {
  title: string
  description: string
  button: Link | null
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

export type PageBlock = InfoBanner | ProjectsBanner | { type: BlockType.NoType }