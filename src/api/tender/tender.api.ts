import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import {
  IGetTenderDetailParams,
  IGetTenderDetailResponse,
  IGetTendersListPaginatedParams,
  IGetTendersListPaginatedResponse,
  IGetTendersListParams,
  IGetTendersListResponse} from 'types/requests';

export const tenderApi = createApi({
  reducerPath: 'tenderApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_REACT_APP_API_URL}tender`
  }),
  endpoints: ({ query }) => ({
    getTendersList: query<IGetTendersListResponse, IGetTendersListParams>({
      query: () => ({
        url: '/list/'
      })
    }),
    getTendersListPaginated: query<IGetTendersListPaginatedResponse, IGetTendersListPaginatedParams>({
      query: ({ page = 1, limit = 10 }) => ({
        url: '/list/',
        params: {
          page,
          limit
        }
      })
    }),
    getTenderDetail: query<IGetTenderDetailResponse, IGetTenderDetailParams>({
      query: ({ id }) => ({
        url: `/detail/${id}`
      })
    })
  })
});

export const {
  useGetTendersListQuery,
  useGetTendersListPaginatedQuery,
  useGetTenderDetailQuery
} = tenderApi;