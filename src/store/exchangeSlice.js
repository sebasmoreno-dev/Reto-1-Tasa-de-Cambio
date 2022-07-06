import { createSlice } from '@reduxjs/toolkit';

export const exchangeSlice = createSlice({
	name: 'exchange',
	initialState: {
		
			to: 'COP - Colombian Peso',
			from: 'USD - United States Dollar',
			value: 1,
			status: 'not-rated',

	},
	reducers: {

		setRatesCurrencies: (state, action) => {
			state.to = action.payload.to;
			state.from = action.payload.from;
			state.value = action.payload.value;
			state.status = 'rated';
		}


	}
});


// Action creators are generated for each case reducer function
export const { setRatesCurrencies } = exchangeSlice.actions;