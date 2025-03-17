import { objectsApi } from './objects.api';

export const objects = {
  reducers: { [objectsApi.reducerPath]: objectsApi.reducer },
  middleware: [objectsApi.middleware]
};

