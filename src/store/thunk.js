import { exchangeApi } from './api/exchangeApi';
import { setCurrencies } from './exchangeSlice';


export const getCurencies = () => {
  return async (dispatch, getState) => {

    const { baseCurrency, targetCurrency } = getState().exchange;

    const response = await exchangeApi.get('/currencies.json?app_id=a29dd408540f4f4bab229095d9a4bd5d');

    const currencies = response.data;

    /* Dispatching the action setCurrencies with the payload of the object. */
    dispatch(setCurrencies({
      currencies: baseCurrency ? [baseCurrency, targetCurrency] : currencies,
      baseCurrency: baseCurrency || currencies[0],
      targetCurrency: targetCurrency || currencies[1],
    }));
  }
}
