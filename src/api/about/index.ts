import { aboutApi } from "./about.api";

export const about = {
  reducers: {
    [aboutApi.reducerPath]: aboutApi.reducer
  },
  middleware: [aboutApi.middleware]
};

