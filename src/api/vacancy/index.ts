import { vacancyApi } from './vacancy.api';

export const vacancy = {
  reducers: { [vacancyApi.reducerPath]: vacancyApi.reducer },
  middleware: [vacancyApi.middleware]
};