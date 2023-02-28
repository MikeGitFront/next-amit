export {}

// import { getPageContentQuery } from "./get-page-content"
// import { GetCaseStudiesContentQuery, GetContactUsContentQuery, GetOnboardingContentQuery, GetPageContentQuery } from '../../../generated/schema'
// import { fetchGraphqlStrapi } from "../client"
// import { getContantUsQuery } from "./get-contact-us-content"
// import { getOnboardingContentQuery } from "./get-onboarding-content"
// import { getCaseStudiesContentQuery } from "./get-case-studies-content"

// type query = GetPageContentQuery

// export const getStaticQuery = (path: string): Promise<query> => {
//   console.log('path', path)
//   const obj: Record<string, (path?: string) => Promise<query>> = {
//     "/onboarding": (path?: string) => fetchGraphqlStrapi<GetOnboardingContentQuery>(getOnboardingContentQuery, { path: "/onboarding" }),
//     "/": (path?: string) => fetchGraphqlStrapi<GetPageContentQuery>(getPageContentQuery, { path: "/" }),
//     // "/about-us": "2",g
//     "/case-studies": (path?: string) => fetchGraphqlStrapi<GetCaseStudiesContentQuery>(getCaseStudiesContentQuery, { path: path || "/case-studies" }),
//     "/contact-us": (path?: string) => fetchGraphqlStrapi<GetContactUsContentQuery>(getContantUsQuery, { path: "/contact-us" }),
//   }

//   const pagePath = Object.keys(obj).find(key => key !== "/" && path.startsWith(key))

//   return Object.keys(obj).includes(path) ? obj[path]() : pagePath ? obj[pagePath](path) : obj["/"]()
// }