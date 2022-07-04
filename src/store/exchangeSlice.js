import { createSlice } from '@reduxjs/toolkit';

export const exchangeSlice = createSlice({
    name: 'exchange',
    initialState: {
        rates: [],
        base: null,
        target: null,
        amount: null,
        currencies: [],
    },
    reducers: {
        setCurrencies: (state, { payload }) => {
            state.rates = payload.rates;
            state.base = payload.baseCurrency;
            state.target = payload.targetCurrency;
            state.currencies = payload.currencies;
            state.code = payload.code;
        }

    }
});


// Action creators are generated for each case reducer function
export const { setCurrencies } = exchangeSlice.actions;