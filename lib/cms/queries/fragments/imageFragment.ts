export const imageFragment = /* GraphQL */ `
  fragment Image on UploadFileEntityResponse {
    data {
      attributes {
        url
        alternativeText
        width
        height
      }
    }
  }
`
