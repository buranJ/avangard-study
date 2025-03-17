import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import {
  IGetNewsDetailParams,
  IGetNewsDetailResponse,
  IGetNewsLinkParams,
  IGetNewsLinkResponse,
  IGetNewsParams,
  IGetNewsResponse
} from 'types/requests';

export const newsApi = createApi({
  reducerPath: 'newsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_REACT_APP_API_URL
  }),
  endpoints: ({ query }) => ({
    getNews: query<IGetNewsResponse, Partial<IGetNewsParams> | void>({
      query: ({ limit = 8, page = 1 } = {}) => ({
        url: '/news/news',
        params: {
          limit,
          page
        }
      })
    }),
    getSmiNews: query<IGetNewsLinkResponse, Partial<IGetNewsLinkParams> | void>({
      query: ({ limit = 8, page = 1 } = {}) => ({
        url: '/news/link-news',
        params: {
          limit,
          page
        }
      })
    }),
    getNewsDetail: query<IGetNewsDetailResponse, IGetNewsDetailParams>({
      query: ({ slug }) => ({
        url: `/news/news/${slug}`
      })
    })
  })
});

export const { useGetNewsDetailQuery, useGetSmiNewsQuery, useGetNewsQuery } = newsApi;

