import { exchangeApi } from './api/exchangeApi';
import { setCurrencies } from './exchangeSlice';


export const getCurrencies = () => {
  return async (dispatch, getState) => {
    const { data } = await exchangeApi.getCurrencies();
    dispatch(setCurrencies(data));
  }
}
