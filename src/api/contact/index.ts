import { contactApi } from './contact.api';

export const contact = {
  reducers: {
    [contactApi.reducerPath]: contactApi.reducer
  },
  middleware: [contactApi.middleware]
};

