import { useEffect, useState } from 'react';

import { useGetCurrenciesQuery } from '../../store/api/exchangeApi';
import { useForm } from '../../hooks/useForm';

import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import { RowItems } from '../components/RowItems';


import { GetRates } from '../components/GetRates.jsx';



export const Home =  () => {


  const [currenciesListArray, setcurrenciesListArray] = useState([]);



  const { data: currenciesList } = useGetCurrenciesQuery();

  useEffect(() => {
  setcurrenciesListArray(currenciesList && Object.keys(currenciesList));
  }, [currenciesList]);
  


  const { from, to, value, status, onInputChange  } = useForm({
    from: 'USD',
    to: 'AED',
    value: '1',
    status: '',
  });


console.log(from, to, value, status);

const [price, setPrice] = useState();

const convertCurrency = () => {
  fetch(`https://openexchangerates.org/api/latest.json?app_id=a29dd408540f4f4bab229095d9a4bd5d&symbols=${to}`)
      .then(response => response.json())
      .then(data => setPrice(data && data.rates[to].toFixed(2)));
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

        <Form >

          <Form.Group className="mb-3, mt-5" >
            <Form.Label>Amount</Form.Label>
            <Form.Control
              as="input"
              label="Amount"
              type="number"
              placeholder="$1.00"
              name="value"
              value={value}
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
              <option
                value="USD"
              >
                  USD - United States Dollar
                </option>
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
                  value={currency}
                >
                  {currency} - {currenciesList[currency]}
                </option>
                ))
              }
            </Form.Control>
            <Form.Text className="text-muted">
              Select the currency you want to convert
            </Form.Text>
          </Form.Group>

            <button
              type='button'
              className="btn btn-primary mb-3 mt-4"
              onClick={convertCurrency}
            >
              Convert
            </button>

            
            <GetRates
            to={to}
            price={price}
            value={value}
            />

        </Form>


      </Container>
    </>
  )
}
