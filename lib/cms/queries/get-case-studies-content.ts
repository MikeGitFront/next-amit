import { imageFragment } from './fragments/imageFragment'
import { buttonFragment } from './fragments/buttonFragment'
import { linkFragment } from './fragments/linkFragment'

export const getCaseStudiesContentQuery = /* GraphQL */ `
  query getCaseStudiesContent($path: String) {
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
            ... on ComponentBlocksBlogBanner {
              items {
                image {
                  ...Image
                }
                title
                description
                link {
                  ...Link
                }
              }
            }
            ... on ComponentCommonPromoBanner {
              title
              description
              image {
                ...Image
              }
              button {
                ...Button
              }
            }
            ... on ComponentBlocksClientBanner {
              items {
                image {
                  ...Image
                }
                title
                description
              }
              images {
                data {
                  attributes {
                    alternativeText
                    url
                  }
                }
              }
            }
            ... on ComponentBlocksAboutProjectBanner {
              title
              description
            }
            ... on ComponentBlocksHeadingBanner {
              text
            }
            ... on ComponentBlocksRichTextBanner {
              text
            }
            ... on ComponentBlocksCrossPlatformBanner {
              title
              description
              image {
                ...Image
              }
            }
            ... on ComponentBlocksComponentsTableBanner {
              title
              description
              headers {
                text
              }
              rows(pagination: { limit: 100 }) {
                items {
                  text
                }
              }
            }
            ... on ComponentBlocksIntegrationBanner {
              title
              description
              image {
                ...Image
              }
            }
          }
        }
      }
    }
  }
  ${buttonFragment}
  ${imageFragment}
  ${linkFragment}
`
