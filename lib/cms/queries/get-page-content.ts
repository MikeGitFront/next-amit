export const getPageContentQuery = /* GraphQL */ `
query getPageContent {
  pages (filters:{ path: { eq: "/" } }) {
    data {
      attributes {
        blocks {
          __typename
          ... on ComponentBlocksInfoBanner {
            title
            description
            button {
              label
              href
              type
            }
            mainImage {
              data {
                attributes {
                  url
                  alternativeText
                }
              }
            }
            secondaryImages {
              data {
                attributes {
                  url
                  alternativeText
                }
              }
            }
          }
          ... on ComponentBlocksProjectsBanner {
            mainDescription
            projects {
              image {
                data {
                  attributes {
                    url
                    alternativeText
                  }
                }
              }
              title
              description
            }
            image {
              data {
                attributes {
                  url
                  alternativeText
                }
              }
            }
            title
            text {
              description
            }
          }
        }
      }
    }
  }
}
`