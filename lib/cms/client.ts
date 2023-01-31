import { ApolloClient, gql, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: process.env.STRAPI_API_URL,
  cache: new InMemoryCache()
})

type Variables = {
  path?: string
  parentPath?: string
}

export const fetchGraphqlStrapi = async <T extends any>(query: string, variables?: Variables ): Promise<T> => {
  const { data } = await client.query<T>({
    query: gql`
        ${query}
        `,
    variables,
  })

  return data
}