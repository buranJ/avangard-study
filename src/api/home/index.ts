import { homeApi } from "./home.api";

export const home = {
  reducers: { [homeApi.reducerPath]: homeApi.reducer },
  middleware: [homeApi.middleware]
};

