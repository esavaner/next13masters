import { type TypedDocumentString } from '@/gql/graphql';

type GQLResponse<T> =
  | { data: T; errors?: undefined }
  | { data?: undefined; errors: { message: string }[] };

export const executeGraphql = async <TResult, TVariables>(
  query: TypedDocumentString<TResult, TVariables>,
  variables: TVariables,
) => {
  if (!process.env.GRAPHQL_API) {
    throw TypeError('GRAPHQL_API is not defined');
  }

  const res = await fetch(process.env.GRAPHQL_API, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', authorization: `Bearer ${process.env.TOKEN}` },
    body: JSON.stringify({ query, variables }),
  });

  const gqlRes = (await res.json()) as GQLResponse<TResult>;

  if (gqlRes.errors) {
    console.log(gqlRes.errors);
    throw TypeError('GraphQL Error', { cause: gqlRes.errors });
  }

  return gqlRes.data;
};
