import { imageFragment } from './fragments/imageFragment'
import { buttonFragment } from './fragments/buttonFragment'
import { linkFragment } from './fragments/linkFragment'

export const getPageContentQuery = /* GraphQL */ `
  query getPageContent($path: String) {
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
            ... on ComponentBlocksInfoBanner {
              title
              description
              button {
                ...Button
              }
              mainImage {
                ...Image
              }
              secondaryImages {
                data {
                  attributes {
                    alternativeText
                    url
                  }
                }
              }
            }
            ... on ComponentBlocksProjectsBanner {
              mainDescription
              projects {
                image {
                  ...Image
                }
                title
                description
              }
              image {
                ...Image
              }
              title
              items {
                description
              }
            }
            ... on ComponentBlocksServicesBanner {
              tabs {
                image {
                  ...Image
                }
                title
                content {
                  title
                  description
                  image {
                    ...Image
                  }
                }
              }
            }
            ... on ComponentBlocksPromoBanner {
              advertisementLabel
              image {
                ...Image
              }
              title
              description
              button {
                ...Button
              }
            }
            ... on ComponentBlocksStartBanner {
              title
              description
              items {
                promoText
              }
              image {
                ...Image
              }
              isReversed
              button {
                ...Button
              }
            }
            ... on ComponentBlocksReviewsBanner {
              title
              reviews {
                image {
                  ...Image
                }
                description
                name
                surname
                position
              }
            }
            ... on ComponentBlocksFeaturedBanner {
              title
              link {
                ...Link
              }
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
            ... on ComponentBlocksImageDescBanner {
              image {
                ...Image
              }
              desc
            }
            ... on ComponentBlocksFactsBanner {
              items {
                image {
                  ...Image
                }
                title
                description
              }
            }
            ... on ComponentBlocksAboutBanner {
              theme
              title
              isReversed
              description
              image {
                ...Image
              }
              items {
                item
              }
            }
            ... on ComponentBlocksModelsBanner {
              title
              description
              items {
                title
                image {
                  ...Image
                }
              }
            }
            ... on ComponentBlocksShowOffBanner {
              title
              items {
                item
              }
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
            ... on ComponentBlocksOnBoardingPromoBanner {
              label
              title
              description
              images {
                data {
                  attributes {
                    width
                    height
                    alternativeText
                    url
                  }
                }
              }
              button {
                ...Button
              }
              mainImage {
                ...Image
              }
              bgImage {
                ...Image
              }
            }
            ... on ComponentBlocksOnBoardingChooseBanner {
              title
              description
              subtitle
              items {
                image {
                  ...Image
                }
                title
                description
              }
            }
            ... on ComponentBlocksOnBoardingFeaturesBanner {
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
            ... on ComponentBlocksOnBoardingQaBanner {
              title
              items {
                image {
                  ...Image
                }
                title
                description
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
            ... on ComponentBlocksOnBoardingCreateStoreBanner {
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
