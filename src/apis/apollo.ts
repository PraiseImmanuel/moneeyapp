// Use apollo to manage data from Graphql server

import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: "https://spacex-production.up.railway.app/",
    cache: new InMemoryCache(),
});

export default client;
