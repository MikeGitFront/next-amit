export const getStaticPagesPathsQuery = /* GraphQL */ `
  query getStaticPagePaths($parentPath: String) {
    pages(filters: { path: { startsWith: $parentPath, ne: $parentPath } }) {
      data {
        attributes {
          path
        }
      }
    }
  }
`
