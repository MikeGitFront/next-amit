import { imageFragment } from './fragments/imageFragment'

export const getContantUsQuery = /* GraphQL */ `
  query getContactUsContent($path: String) {
    pages(filters: { path: { eq: $path } }) {
      data {
        attributes {
          pageTitle {
            title
          }
          blocks {
            __typename
            ... on ComponentCommonTitleBlock {
              title
            }
            ... on ComponentBlocksContactUsInfo {
              title
              items {
                image {
                  ...Image
                }
                title
                items {
                  text
                }
              }
            }
          }
        }
      }
    }
  }
  ${imageFragment}
`
