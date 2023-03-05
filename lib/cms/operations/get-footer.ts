import { fetchGraphqlStrapi } from '../client'
import { GetFooterQuery } from '../../../generated/schema'
import { getFooterQuery } from '../queries/get-footer-query'
import { normalizeImage } from '../utils/shared'

export const getFooterOperation = async () => {
  const { footer } = await fetchGraphqlStrapi<GetFooterQuery>(getFooterQuery)
  const attributes = footer?.data?.attributes || {}
  const copyright = attributes.copyright
  const icons = attributes.icons?.map((icon) => ({ href: icon?.href || '', image: normalizeImage(icon?.image) }))
  const links = attributes.link
  return {
    copyright,
    icons,
    links,
  }
}
