import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const ID = a29dd408540f4f4bab229095d9a4bd5d;

export const exchangeApi = createApi({
reducerPath: 'apiOne',

baseQuery: fetchBaseQuery({
  baseUrl: 'https://openexchangerates.org/api/',
}),

endpoints: (builder) => ({

  getCurrencies: builder.query({
    query: () => `/currencies.json?app_id=${ID}`,
  }),

  getCurrencyBase: builder.query({
    query: ({ base }) => `/latest.json?app_id=${ID}&base=${base}`,
  }),

  getLatest: builder.query({
    query: () => `/latest.json?app_id=${ID}`
  }),

  getHistorical: builder.query({
    query: ({ base, date }) => `/historical/${date}.json?app_id=${ID}&base=${base}`,
  }),

  getConvertCurrencies: builder.query({
    query: ({ base, target, amount }) => `/convert?app_id=${ID}&base=${base}&target=${target}&amount=${amount}`,
  })

  }),
});

export const {  } = exchangeApi;

/* $ . get ( 'https://openexchangerates.org/api/latest.json' ,  { app_id : 'YOUR_APP_APP_ID' , base : 'UGX' } , function ( data ) { console . log ( "1 chelín ugandés es igual a" + data . tipos de cambio .JPY + " Yen japonés" ) ; } ) ; */
//