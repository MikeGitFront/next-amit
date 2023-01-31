import { fetchGraphqlStrapi } from "../client"
import { GetPageContentQuery } from '../../../generated/schema'
import { getPageContentQuery } from "../queries/get-page-content"
import { filterEdges } from "../utils/common"
import { contentHandler } from "../utils/page"

export const getPageContentOperation = async (path: string) => {
  const { pages } = await fetchGraphqlStrapi<GetPageContentQuery>(getPageContentQuery, { path })
  const [page] = pages?.data || []

  if (!page) {
    return {
      blocks: [],
    }
  }

  const blocks = page.attributes?.blocks || []
  const title = page.attributes?.pageTitle || ''

  const content = filterEdges(blocks)

  return {
    blocks: content.map(item => contentHandler.normalizeBlock(item)),
    title,
  }
}