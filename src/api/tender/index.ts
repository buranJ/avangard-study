import { tenderApi } from './tender.api';

export const tender = {
  reducers: { [tenderApi.reducerPath]: tenderApi.reducer },
  middleware: [tenderApi.middleware]
};