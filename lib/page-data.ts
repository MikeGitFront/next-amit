import { getFooterOperation } from './cms/operations/get-footer'
import { getTopMenuOperation } from './cms/operations/get-top-menu'

export const getPageData = async () => {
  const { menu, buttons, logo } = await getTopMenuOperation()
  const { copyright, icons, links } = await getFooterOperation()

  return {
    header: {
      logo,
      menu,
      buttons,
    },
    footer: {
      copyright,
      icons,
      links,
    },
  }
}
