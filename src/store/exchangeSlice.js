import { createSlice } from '@reduxjs/toolkit';

export const exchangeSlice = createSlice({
	name: 'exchange',
	initialState: {

		base: [],
	},
	reducers: {
		setCurrencies: (state, action) => {
			state.base = action.payload;
		},
	}
});


// Action creators are generated for each case reducer function
export const { setCurrencies } = exchangeSlice.actions;