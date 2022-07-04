import { configureStore } from '@reduxjs/toolkit';
import { exchangeApi } from './api/exchangeApi';
import { exchangeSlice } from './exchangeSlice';

/* Creating a store with the reducer and middleware. */
export const store = configureStore({
reducer: {
  exchange: exchangeSlice.reducer,
  

  [exchangeApi.reducerPath]: exchangeApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(exchangeApi.middleware),
});