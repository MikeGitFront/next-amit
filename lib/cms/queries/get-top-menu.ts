import { buttonFragment } from './fragments/buttonFragment'
import { imageFragment } from './fragments/imageFragment'

export const getTopMenuQuery = /* GraphQL */ `
  query getTopMenu {
    topMenu {
      data {
        attributes {
          logo {
            ...Image
          }
          menu {
            label
            href
          }
          buttons {
            ...Button
          }
        }
      }
    }
  }
  ${imageFragment}
  ${buttonFragment}
`
