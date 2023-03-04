import { ComponentCommonButton, ComponentCommonLink, UploadFileEntity, UploadFileEntityResponse } from "../../../generated/schema"
import { Image, Link } from "../types"
import { ButtonType } from "../types/page"

export const normalizeButton = (button: Omit<ComponentCommonButton, 'id'>| null ) : Link => {
  const { href, label, type } = button || {}

  return {
    buttonType: type === 'primary' ? ButtonType.Primary : ButtonType.Secondary,
    label: label || '',
    href: href || '',
  }
}

export const normalizeImage = (image: any): Image => ({
  url: `${process.env.STRAPI_FILE_URL}${image?.data?.attributes?.url || ''}`,
  alternativeText: image?.data?.attributes?.alternativeText || '',
  width: image?.data?.attributes?.width || 0,
  height: image?.data?.attributes?.height || 0,
})

export const normalizeImages = (image: any): Image => ({
  url: `${process.env.STRAPI_FILE_URL}${image?.attributes?.url || ''}`,
  alternativeText: image?.attributes?.alternativeText || '',
  width: image?.attributes?.width || 0,
  height: image?.attributes?.height || 0,
})

export const normalizeLink = (link: Omit<ComponentCommonLink, 'id'>): Link => ({
  label: link?.label || '',
  href: link?.href || '',
})