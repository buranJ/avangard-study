import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { IContactParams, IContactResponse, ITechnicalBaseParams, ITechnicalBaseResponse } from 'types/requests';

export const contactApi = createApi({
  reducerPath: 'contactApi',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_REACT_APP_API_URL
  }),
  endpoints: ({ query }) => ({
    getContact: query<IContactResponse, IContactParams>({
      query: () => ({
        url: '/contact/contact-info'
      })
    }),
    getTechnicalBase: query<ITechnicalBaseResponse, ITechnicalBaseParams>({
      query: () => ({
        url: '/contact/technical-base'
      })
    })
  })
});

export const { useGetContactQuery, useGetTechnicalBaseQuery } = contactApi;

