export const BASE_STRING = `https://cms.churchill.edu.au`;

import { print } from "graphql";
import type { TypedDocumentNode } from "@graphql-typed-document-node/core";

type GraphQLDoc<TData, TVariables> =
  | string
  | TypedDocumentNode<TData, TVariables>;

const retry = async <T>(fn: () => Promise<T>, attempts = 3) => {
  let err;
  for (let i = 0; i < attempts; i++) {
    try {
      return await fn();
    } catch (e) {
      err = e;
      await new Promise((r) => setTimeout(r, 300 * (i + 1)));
    }
  }
  throw err;
};

export const fetchGraphQL = async <TData, TVariables = {}>(
  query: GraphQLDoc<TData, TVariables>,
  variables?: TVariables,
) =>
  retry(async () => {
    const queryString = typeof query === "string" ? query : print(query);

    const res = await fetch(`${BASE_STRING}/graphql`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: queryString, variables }),
      next: { revalidate: 60 },
    });

    if (!res.ok) throw new Error(await res.text());

    const json = await res.json();
    if (json.errors) throw new Error(JSON.stringify(json.errors));

    return json.data as TData;
  });

type ExtractDocData<TDoc extends TypedDocumentNode<any, any>> =
  TDoc extends TypedDocumentNode<infer TData, any> ? TData : never;

type ExtractDocVars<TDoc extends TypedDocumentNode<any, any>> =
  TDoc extends TypedDocumentNode<any, infer TVars> ? TVars : never;

export const runQuery = async <TDoc extends TypedDocumentNode<any, any>>(
  doc: TDoc,
  variables?: ExtractDocVars<TDoc>,
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
