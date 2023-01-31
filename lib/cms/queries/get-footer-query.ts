import { imageFragment } from "./fragments/imageFragment"
import { linkFragment } from "./fragments/linkFragment"


export const getFooterQuery = /* GraphQL */ `
query getFooter {
  footer {
    data {
      attributes {
        copyright
        link {
          ...Link
        }
        icons {
          image {
            ...Image
          }
          href
        }
      }
    }
  }
}
${imageFragment}
${linkFragment}
`