import { configureStore } from '@reduxjs/toolkit';
import { exchangeApi } from './api/exchangeApi';

export const store = configureStore({
reducer: {
    [exchangeApi.reducerPath]: exchangeApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(exchangeApi.middleware),
});