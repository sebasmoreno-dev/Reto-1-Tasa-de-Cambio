import { createSlice } from '@reduxjs/toolkit';

export const exchangeSlice = createSlice({
	name: 'exchange',
	initialState: {

		base: [
			{
				currency: 'USD',
				currencyCode: 'USD',
				currencyName: 'United States Dollar',
				currencySymbol: '$',
				flag: 'https://restcountries.eu/data/usa.svg',
			}
		],
	},
	reducers: {
		setCurrencies: (state, action) => {
			state.base = action.payload;
		},
	}
});


// Action creators are generated for each case reducer function
export const { setCurrencies } = exchangeSlice.actions;