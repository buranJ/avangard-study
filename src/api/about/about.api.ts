import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface IPostApplicationRequest {
  theme?: string;
  name?: string;
  phone?: string;
  email?: string;
  comment?: string;
}

interface IPostApplicationResponse {
  id: number;
  theme?: string;
  name?: string;
  phone?: string;
  email?: string;
  created_at: string;
  comment?: string;
}

interface IPostMailingRequest {
  email: string;
}

interface ISection {
  id: number;
  title: string;
  description: string;
  about_us: number;
}

interface IMaterial {
  id: number;
  title: string;
  section: number;
}

interface IDocument {
  id: number;
  title: string;
  image: string;
  section: number;
}

interface ISection2 extends ISection {
  materials: IMaterial[];
}

interface ISection4 extends ISection {
  gramotas: IDocument[];
}

interface ISection5 extends ISection {
  licences: IDocument[];
}

interface ISection6 extends ISection {
  sertificats: IDocument[];
}
interface IAdvantage {
  id: number;
  svg: string;
  title: string;
}
interface IAboutUsResponse {
  description: string;
  advantages: IAdvantage[];
  youtube_url_1: string;
  youtube_url_2: string;
  section_1: ISection;
  section_2: ISection2;
  section_3: ISection;
  section_4: ISection4;
  section_5: ISection5;
  section_6: ISection6;
}

export const aboutApi = createApi({
  reducerPath: 'aboutApi',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_REACT_APP_API_URL
  }),
  endpoints: ({ query, mutation }) => ({
    postMailing: mutation<void, IPostMailingRequest>({
      query: ({ email }) => ({
        method: 'POST',
        url: '/about/mailing/',
        body: {
          email
        }
      })
    }),
    postApplication: mutation<IPostApplicationResponse, IPostApplicationRequest>({
      query: ({ theme, name, phone, email, comment }) => ({
        method: 'POST',
        url: '/about/application/create/',
        body: {
          theme,
          name,
          phone,
          email,
          comment
        }
      })
    }),
    getAboutUs: query<IAboutUsResponse, void>({
      query: () => ({
        url: '/about/about-us'
      })
    })
  })
});

export const { usePostApplicationMutation, usePostMailingMutation, useGetAboutUsQuery } = aboutApi;