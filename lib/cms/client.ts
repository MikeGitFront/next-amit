import { ApolloClient, gql, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: process.env.STRAPI_API_URL,
  cache: new InMemoryCache()
})

type Variables = {
  path?: string
  parentPath?: string
}

export const fetchGraphqlStrapi = async <T extends any>(query: string, variables?: Variables): Promise<T> => {
  const res = await fetch(process.env.STRAPI_API_URL || "", {
    method: "POST",
    headers: {
      "authorization": `bearer ${process.env.STRAPI_API_TOKEN}` || "",
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      query, variables,
    })
  })

  const json = await res.json()

  return json.data
}