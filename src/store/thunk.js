import { exchangeApi } from './api/exchangeApi';
import { setRatesCurrencies } from './exchangeSlice';


export const checkingRatesCurrencies = () => {

  return async (dispatch, getState) => {

    const { from, to, value } = getState().exchange.base;

    const { data } = await exchangeApi.getCurrencyBase({
      base: from,
    });

    const { rates } = data;

    const rate = rates[to];

    const result = value * rate;

    dispatch(setRatesCurrencies({
      from,
      to,
      value,
      result,
    }));

  }
}
