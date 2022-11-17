import { GraphQLClient } from "graphql-request";
import { ENV_VARS } from "utils/env-vars";

export const gqlClient = new GraphQLClient(ENV_VARS.GRAPHQL_ENDPOINT, {
  headers: {
    authorization: `Bearer ${ENV_VARS.BACKEND_TOKEN}`,
  },
});
