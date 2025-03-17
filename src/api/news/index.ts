import { newsApi } from './news.api';

export const news = {
  reducers: { [newsApi.reducerPath]: newsApi.reducer },
  middleware: [newsApi.middleware]
};

