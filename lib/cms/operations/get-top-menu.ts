import { fetchGraphqlStrapi } from "../client"
import { GetTopMenuQuery } from '../../../generated/schema'
import { getTopMenuQuery } from "../queries/get-top-menu"

export const getTopMenuOperation = async () => {
  const { topMenu } = await fetchGraphqlStrapi<GetTopMenuQuery>(getTopMenuQuery)
  const attributes = topMenu?.data?.attributes || {}
  const menu = attributes.menu

  const buttons = attributes.buttons
  const logo = attributes.logo?.data?.attributes

  return {
    menu,
    buttons,
    logo,
  }
}