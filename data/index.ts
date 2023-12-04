import { configureStore } from '@reduxjs/toolkit';
import { api } from '../api/api';
import { verbsSlice } from './reducers/verbsSlice';

export const setupStore = () => {
  return configureStore({
    reducer: {
      verbs: verbsSlice.reducer,
      [api.reducerPath]: api.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(api.middleware),
  });
};
