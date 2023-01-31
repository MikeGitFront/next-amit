import { fetchGraphqlStrapi } from "../client"
import { GetTopMenuQuery } from '../../../generated/schema'
import { getTopMenuQuery } from "../queries/get-top-menu"
import { normalizeButton, normalizeImage } from "../utils/shared"

export const getTopMenuOperation = async () => {
  const { topMenu } = await fetchGraphqlStrapi<GetTopMenuQuery>(getTopMenuQuery)
  const attributes = topMenu?.data?.attributes || {}
  const menu = attributes.menu

  const buttons = attributes.buttons?.map(normalizeButton)
  const logo = normalizeImage(attributes.logo)

  return {
    menu,
    buttons,
    logo,
  }
}