import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

/* API_KEY = a29dd408540f4f4bab229095d9a4bd5d; */

export const exchangeApi = createApi({
reducerPath: 'exchangeApi',

baseQuery: fetchBaseQuery({
  baseUrl: 'https://openexchangerates.org/api/',
}),

endpoints: (builder) => ({

  getCurrencies: builder.query({
    query: () => `/currencies.json?app_id=a29dd408540f4f4bab229095d9a4bd5d`,
  }),

  getCurrencyBase: builder.query({
    query: () => '/latest.json?app_id=a29dd408540f4f4bab229095d9a4bd5d&%26base=USD',
  }),
  
  getRateFromUSDToCOP: builder.query({
    query: () => '/latest.json?app_id=a29dd408540f4f4bab229095d9a4bd5d&%26base=USD&%26symbols=COP',
    }),

  }),
});

export const { useGetCurrenciesQuery, getRateFromUSDToCOP } = exchangeApi;
