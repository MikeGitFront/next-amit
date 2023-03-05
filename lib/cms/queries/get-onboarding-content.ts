import { imageFragment } from './fragments/imageFragment'
import { buttonFragment } from './fragments/buttonFragment'

export const getOnboardingContentQuery = /* GraphQL */ `
  query getOnboardingContent($path: String) {
    pages(filters: { path: { eq: $path } }) {
      data {
        attributes {
          pageTitle {
            title
          }
          blocks {
            __typename
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
          }
        }
      }
    }
  }
  ${buttonFragment}
  ${imageFragment}
`
