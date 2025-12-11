import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "https://cms.churchill.edu.au/graphql",
  documents: "src/**/*.{gql,graphql}",
  generates: {
    "src/graphql/generated/graphql.ts": {
      plugins: ["typescript", "typescript-operations", "typed-document-node"],
      config: {
        skipTypename: true,
      },
    },
  },
};

export default config;
