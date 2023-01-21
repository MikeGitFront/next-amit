export const getTopMenuQuery = /* GraphQL */ `
query getTopMenu {
  topMenu {
    data {
      attributes {
        logo {
          data {
            attributes {
              alternativeText
              url
              width
              height
            }
          }
        }
        menu {
          label
          href
        }
        buttons {
          label
          href
          type
        }
      }
    }
  }
}
`