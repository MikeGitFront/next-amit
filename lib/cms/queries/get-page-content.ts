import { imageFragment } from "./fragments/imageFragment"
import { buttonFragment } from "./fragments/buttonFragment"
import { linkFragment } from "./fragments/linkFragment"

export const getPageContentQuery = /* GraphQL */ `
query getPageContent ($path: String) {
  pages (filters:{ path: { eq: $path } }) {
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
            text {
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
        }
      }
    }
  }
}
${buttonFragment}
${imageFragment}
${linkFragment}
`