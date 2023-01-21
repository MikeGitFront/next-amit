import { getTopMenuOperation } from "./cms/operations/get-top-menu"
import { getPageContentOperation } from "./cms/operations/get-page-content"

export const getPageData = async () => {
  const { menu, buttons, logo } = await getTopMenuOperation()
  const { } = await getPageContentOperation()
  
  return {
    header: {
      logo,
      menu,
      buttons,
    }
  }
}