import { ApolloClient, gql, GraphQLRequest, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: process.env.STRAPI_API_URL,
    cache: new InMemoryCache()
})

export const fetchGraphqlStrapi = async <T extends any>(query: string): Promise<T> => {
    const { data } = await client.query<T>({
        query: gql`
        ${query}
        `
    })

    return data
}