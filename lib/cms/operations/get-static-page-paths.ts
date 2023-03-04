import { fetchGraphqlStrapi } from "../client"
import { GetStaticPagePathsQuery } from "../../../generated/schema"
import { getStaticPagesPathsQuery } from "../queries/get-static-pages-paths"

export const getStaticPagePathsOperation = async (parentPath: string) => {
  const { pages } = await fetchGraphqlStrapi<GetStaticPagePathsQuery>(getStaticPagesPathsQuery, { parentPath })
  const paths = pages?.data.map(item => item.attributes?.path)

  return {
    paths
  }
}