import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { IGetHomeInfoResponse } from 'types/requests';

export const homeApi = createApi({
  reducerPath: 'homeApi',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_REACT_APP_API_URL
  }),
  endpoints: ({ query }) => ({
    getHomeInfo: query<IGetHomeInfoResponse, void>({
      query: () => ({
        url: 'home/home-info'
      })
    })
  })
});

export const { useGetHomeInfoQuery } = homeApi;

