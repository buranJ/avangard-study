import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import { about } from './about';
import { contact } from './contact';
import { home } from './home';
import { news } from './news';
import { objects } from './objects';
import { tender } from './tender';
import { vacancy } from './vacancy';

const rootReducer = combineReducers({
  ...objects.reducers,
  ...contact.reducers,
  ...news.reducers,
  ...home.reducers,
  ...about.reducers,
  ...tender.reducers,
  ...vacancy.reducers
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(
        ...objects.middleware,
        ...contact.middleware,
        ...news.middleware,
        ...home.middleware,
        ...about.middleware,
        ...tender.middleware,
        ...vacancy.middleware
      )
  });
};

setupListeners(setupStore().dispatch);

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];