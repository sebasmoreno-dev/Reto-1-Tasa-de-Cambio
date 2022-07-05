import { useEffect, useState } from 'react';

import { useGetCurrenciesQuery } from '../../store/api/exchangeApi';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from '../../hooks/useForm';

import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import { RowItems } from '../components/RowItems';

/* import { getRateFromUSDToCOP } from '../../store/api/exchangeApi'; */
/* import { getData } from '../../store/api/getData'; */
import { GetRates } from '../components/GetRates.jsx';
import { checkingRatesCurrencies } from '../../store/thunk';


export const Home =  () => {


  const [currenciesListArray, setcurrenciesListArray] = useState([]);

  
  const { base } = useSelector(state => state.exchange);
  const dispatch = useDispatch();


  const { data: currenciesList } = useGetCurrenciesQuery();

  //consumir getData
  /* const { ratesCurrencies } = await getData();
  console.log(ratesCurrencies, 'ratesCurrencies USD  to COP'); */

  useEffect(() => {
  setcurrenciesListArray(currenciesList && Object.keys(currenciesList));
  }, [currenciesList]);
  


  const { from, to,  onInputChange  } = useForm({
    from: 'USD - United States Dollar',
    to: 'COP - Colombian Peso',
    value: '1',
  });


  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(checkingRatesCurrencies());
  }


  return (
    <>
      <h2>Home</h2>
      <Container className="mb-3 mt-5 ">

        <div className='d-flex justify-content-center flex-column align-items-center'>
          <h3>Sm Currency Converter</h3>
        <p>Check live foreign currency exchange rates</p>
        </div>

        <RowItems />

        <div>

        <Form onSubmit={ onSubmit }>

          <Form.Group className="mb-3, mt-5" >
            <Form.Label>Amount</Form.Label>
            <Form.Control
              as="input"
              label="Amount"
              type="number"
              placeholder="$1.00"
              name="value"
              value={1}
              onChange={onInputChange}
              />
          </Form.Group>

          <Form.Group className="mb-3 , mt-4" >
            <Form.Label>From</Form.Label>
            <Form.Control
              as="select"
              label="from"
              placeholder='USD - United States Dollar'
              type="text"
              name="from"
              value={from}
              onChange={onInputChange}
            >
              {
                currenciesListArray?.map((currency, id) => (
                <option
                  key={id}
                  value={id}
                >
                  {currency} - {currenciesList[currency]}
                </option>
                ))
              }
            </Form.Control>
            <Form.Text className="text-muted">
              Select the base currency like a USD - United States Dollar
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3, mt-4" >
            <Form.Label>To</Form.Label>
            <Form.Control
              as="select"
              label="to"
              placeholder='Other currencies'
              type="text"
              name="to"
              value={to}
              onChange={onInputChange}
            >
              {
                currenciesListArray?.map((currency, id) => (
                <option
                  key={id}
                  value={id}
                >
                  {currency} - {currenciesList[currency]}
                </option>
                ))
              }
            </Form.Control>
            <Form.Text className="text-muted">
              Select the currency like a COP - Colombian Peso
            </Form.Text>
          </Form.Group>

            <button
              type="submit"
              className="btn btn-primary mb-3 mt-4"
            >
              Convert
            </button>


            <GetRates />
        </Form>
        </div>

      </Container>
    </>
  )
}
