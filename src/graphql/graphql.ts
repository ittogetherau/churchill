export const BASE_STRING = `https://cms.churchill.edu.au`;

import { print } from "graphql";
import type { TypedDocumentNode } from "@graphql-typed-document-node/core";

type GraphQLDoc<TData, TVariables> =
  | string
  | TypedDocumentNode<TData, TVariables>;

export const fetchGraphQL = async <TData, TVariables = {}>(
  query: GraphQLDoc<TData, TVariables>,
  variables?: TVariables
) => {
  try {
    const queryString = typeof query === "string" ? query : print(query);

    const res = await fetch(`${BASE_STRING}/graphql`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query: queryString, variables }),
      next: { revalidate: 60 },
    });

    console.log("Response status:", res.status);
    if (!res.ok) {
      const errorText = await res.text();
      throw new Error(errorText);
    }

    const json = await res.json();
    if (json.errors) {
      console.error("GraphQL errors:", json.errors);
      throw new Error("GraphQL request failed");
    }

    return json.data as TData;
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
};

type ExtractDocData<TDoc extends TypedDocumentNode<any, any>> =
  TDoc extends TypedDocumentNode<infer TData, any> ? TData : never;
type ExtractDocVars<TDoc extends TypedDocumentNode<any, any>> =
  TDoc extends TypedDocumentNode<any, infer TVars> ? TVars : never;

// Small helper so callers only pass the generated document + vars.
export const runQuery = async <TDoc extends TypedDocumentNode<any, any>>(
  doc: TDoc,
  variables?: ExtractDocVars<TDoc>
) => fetchGraphQL<ExtractDocData<TDoc>, ExtractDocVars<TDoc>>(doc, variables);

export const resolveFileLink = (file?: any) => {
  if (!file) return "";
  if (typeof file === "string") return file;
  return file.id
    ? `${BASE_STRING}/assets/${file.id}${
        file.filename_download ? `/${file.filename_download}` : ""
      }`
    : "";
};
