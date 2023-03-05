import { fetchGraphqlStrapi } from '../client'
import { GetPrivacyPolicyContentQuery } from '../../../generated/schema'
import { getPrivacyPolicyQuery } from '../queries/get-privacy-policy'
import { filterEdges } from '../utils/common'
import { BlockType } from '../types'

export const getPrivacyPolicyOpertion = async (path: string) => {
  const { pages } = await fetchGraphqlStrapi<GetPrivacyPolicyContentQuery>(getPrivacyPolicyQuery, { path })
  const [page] = pages?.data || []

  if (!page) {
    return {
      blocks: [],
      title: null,
    }
  }

  const blocks = page.attributes?.blocks || []
  const title = page.attributes?.pageTitle?.title || ''

  const content = filterEdges(blocks)

  return {
    blocks: content.map((item: (typeof content)['0']) => {
      if (item.__typename === 'Error') {
        return {
          type: BlockType.NoType,
        }
      }

      if ('text' in item) {
        const { text } = item
        return {
          type: BlockType.RichTextBanner,
          data: {
            text: text || '',
          },
        }
      }
    }),
    title,
  }
}
