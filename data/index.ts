import { configureStore } from '@reduxjs/toolkit';
import { verbsSlice } from './reducers/verbsSlice';

export const setupStore = () => {
  return configureStore({
    reducer: {
      verbs: verbsSlice.reducer,
    },
    //   middleware: (getDefaultMiddleware) =>
    //     getDefaultMiddleware().concat(api.middleware),
  });
};
