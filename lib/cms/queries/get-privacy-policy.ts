export const getPrivacyPolicyQuery = /* GraphQL */ `
  query getPrivacyPolicyContent($path: String) {
    pages(filters: { path: { eq: $path } }) {
      data {
        attributes {
          pageTitle {
            title
          }
          blocks {
            ... on ComponentBlocksRichTextBanner {
              text
            }
          }
        }
      }
    }
  }
`
