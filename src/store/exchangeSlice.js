import { createSlice } from '@reduxjs/toolkit';

export const exchangeSlice = createSlice({
    name: 'exchange',
    initialState: {
        rates: [],
        base: '',
    },
    reducers: {
        setCurrencies: (state, action) => {
            state.rates = action.payload.rates;
        }
    }
});


// Action creators are generated for each case reducer function
export const { setRates } = exchangeSlice.actions;