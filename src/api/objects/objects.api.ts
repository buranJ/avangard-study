import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import {
  IGet3DTourListParams,
  IGet3DTourListResponse,
  IGet3DTourParams,
  IGet3DTourResponse,
  IGetConstructionProgressParams,
  IGetConstructionProgressResponse,
  IGetObjectsDetailFinishedParams,
  IGetObjectsDetailFinishedResponse,
  IGetObjectsFinishedListParams,
  IGetObjectsFinishedListResponse,
  IGetObjectsListHome,
  IGetObjectsListHomeParams,
  IGetObjectsListParams,
  IGetObjectsListResponse,
  IGetObjectsParams,
  IGetObjectsResponse
} from 'types/requests';

export interface TransformedAdvantage {
  title: string;
  iconUrl: string;
  id: number;
}

interface TransformedResponse extends Omit<IGetObjectsResponse, 'advantages'> {
  advantages?: TransformedAdvantage[];
}

export const objectsApi = createApi({
  reducerPath: 'objectsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_REACT_APP_API_URL}objects`
  }),
  endpoints: ({ query }) => ({
    getObject: query<TransformedResponse, IGetObjectsParams>({
      query: ({ slug }) => ({
        url: `/detail/${slug}`
      }),
      transformResponse: (response: IGetObjectsResponse): TransformedResponse => ({
        ...response,
        advantages: response.advantages.advantages.map(({ title, svg, id }) => ({
          title,
          iconUrl: svg,
          id
        }))
      })
    }),
    getObjectsList: query<IGetObjectsListResponse, IGetObjectsListParams>({
      query: () => ({
        url: '/list/'
      })
    }),
    getObjectsListHome: query<IGetObjectsListHome, IGetObjectsListHomeParams>({
      query: () => ({
        url: '/list/home'
      })
    }),
    getObjectsFinishedList: query<IGetObjectsFinishedListResponse, IGetObjectsFinishedListParams>({
      query: ({ category_id, page = 1, limit = 8 }) => ({
        url: '/list/ended',
        params: {
          category_id,
          page,
          limit
        }
      })
    }),
    getObjectsDetailFinished: query<IGetObjectsDetailFinishedResponse, IGetObjectsDetailFinishedParams>({
      query: ({ slug }) => ({
        url: `/detail/ended/${slug}`
      })
    }),
    getConstructionProgress: query<IGetConstructionProgressResponse, IGetConstructionProgressParams>({
      query: ({ building_id }) => ({
        url: `/construction-progress/${building_id}`
      })
    }),
    get3dTour: query<IGet3DTourResponse, IGet3DTourParams>({
      query: ({ id }) => ({
        url: `/detail/3d/${id}`
      })
    }),
    get3dTourList: query<IGet3DTourListResponse, IGet3DTourListParams>({
      query: () => ({
        url: `/list/3d`
      })
    })
  })
});

export const {
  useGetObjectQuery,
  useGetObjectsListQuery,
  useGetObjectsListHomeQuery,
  useGetObjectsFinishedListQuery,
  useGetObjectsDetailFinishedQuery,
  useLazyGetConstructionProgressQuery,
  useGetConstructionProgressQuery,
  useLazyGetObjectsFinishedListQuery,
  useGet3dTourQuery,
  useGet3dTourListQuery
} = objectsApi;

