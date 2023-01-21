import { ComponentCommonButton, UploadFileEntity, UploadFileEntityResponse } from "../../../generated/schema"
import { ButtonType, Image, Link } from "../types/page"

export const normalizeLink = (link: any) => {
  const { } = link
}

export const normalizeButton = (button: Omit<ComponentCommonButton, 'id'>): Link => {
  const { href, label, type } = button

  return {
    buttonType: type === 'primary' ? ButtonType.Primary : ButtonType.Secondary,
    label: label || '',
    href: href || '',
  }
}

export const normalizeImage = (image: any): Image => ({
  url: `${process.env.STRAPI_FILE_URL}${image?.data?.attributes?.url || ''}`,
  altText: image.data?.attributes?.alternativeText || '',
})