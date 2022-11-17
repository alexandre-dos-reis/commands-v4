import type { CodegenConfig } from "@graphql-codegen/cli";
require("dotenv").config({ path: ".env.local" });

const config: CodegenConfig = {
  schema: [
    `${process.env.BACKEND_ENDPOINT}/graphql?access_token=${process.env.BACKEND_TOKEN}`,
  ],
  documents: ["./graphql/queries.ts"],
  generates: {
    "graphql/generated/index.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-graphql-request",
      ],
      config: {
        fetcher: "graphql-request",
      },
    },
  },
};

export default config;
