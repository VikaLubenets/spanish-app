import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { IVerb } from '../utils/GeneralTypes';

interface FetchMockDataQueryArgs {
  baseUrl: string;
}

const fetchMockDataQuery =
  ({ baseUrl }: FetchMockDataQueryArgs) =>
  async ({ url }: { url: string }) => {
    const response = await fetch(`${baseUrl}${url}`);
    const data = await response.json();
    return { data };
  };

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchMockDataQuery({ baseUrl: '../data/mockData/data.json' }),
  endpoints: (builder) => ({
    getData: builder.query<IVerb[], void>({
      query: () => ({
        url: '/',
      }),
    }),
  }),
});

export const { useGetDataQuery } = api;
