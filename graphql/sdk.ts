import { getSdk } from "./generated";
import { gqlClient } from "./gql-client";

export const sdk = getSdk(gqlClient);
