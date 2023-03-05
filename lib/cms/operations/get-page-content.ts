import { fetchGraphqlStrapi } from '../client'
import { GetPageContentQuery } from '../../../generated/schema'
import { getPageContentQuery } from '../queries/get-page-content'
import { filterEdges } from '../utils/common'
import { contentHandler } from '../utils/page'
// import { getStaticQuery } from "../queries/getStaticQuery"

export const getPageContentOperation = async (path: string) => {
  // const query = getStaticQuery(path)
  // console.log('deletion',path)
  const { pages } = await fetchGraphqlStrapi<GetPageContentQuery>(getPageContentQuery, { path })
  // const { pages } = await query
  const [page] = pages?.data || []

  if (!page) {
    return {
      blocks: [],
      title: null,
    }
  }

  const blocks = page.attributes?.blocks || []
  const title = page.attributes?.pageTitle || ''

  const content = filterEdges(blocks)

  return {
    blocks: content.map((item) => contentHandler.normalizeBlock(item)),
    title,
  }
}
