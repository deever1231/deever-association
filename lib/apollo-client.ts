import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

let client: ApolloClient<unknown> | null = null;

export function getClient() {
  if (client) return client;
  client = new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
      uri: process.env.NEXT_PUBLIC_ERXES_ENDPOINT,
      headers: {
        "x-app-token": process.env.NEXT_PUBLIC_ERXES_APP_TOKEN ?? "",
      },
    }),
  });
  return client;
}
