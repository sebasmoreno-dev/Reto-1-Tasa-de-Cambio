import { useGetCurrenciesQuery, useGetCurrencyBaseQuery } from '../../store/api/exchangeApi';
import { useDispatch, useSelector } from 'react-redux';
/* import { useForm } from '../../hooks/useForm'; */

import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { BsBarChartFill, BsArrowLeftRight } from "react-icons/bs";
import { MdSend } from "react-icons/md";
import { FaCoins } from "react-icons/fa";
import { AiFillAlert } from "react-icons/ai";
import { setCurrencies } from '../../store/exchangeSlice';
import { useEffect, useState } from 'react';

export const Home = () => {

  const [currenciesListArray, setcurrenciesListArray] = useState([]);


  const currencies = useSelector((state) => state.exchange.base);
  const dispatch = useDispatch();

  /* const { data } = useGetCurrencyBaseQuery(
  );
  console.log(data); */

  const { data: currenciesList } = useGetCurrenciesQuery();
  console.log(currenciesList);



  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setCurrencies(currencies));
  }

  const handleChange2 = (e) => {
    handleChange2(e);
    dispatch(setCurrencies(currencies));
  }

  useEffect(() => {
  setcurrenciesListArray(currenciesList && Object.keys(currenciesList));
  }, [currenciesList]);
  


  return (
    <>
      <h2>Home</h2>
      <Container className="mb-3 mt-5 ">

        <div className='d-flex justify-content-center flex-column align-items-center'>
          <h3>Sm Currency Converter</h3>
        <p>Check live foreign currency exchange rates</p>
        </div>


        <Row className="mb-3 mt-5">
          <Col><FaCoins/> Convert</Col>
          <Col><MdSend/> Send</Col>
          <Col><BsBarChartFill/> Charts</Col>
          <Col><AiFillAlert/> Alerts</Col>
        </Row>

        <div>

        <Form>
          <Form.Group className="mb-3, mt-5" >
            <Form.Label>Amount</Form.Label>
            <Form.Control type="number" placeholder="$1.00" />
          </Form.Group>
          <Form.Group className="mb-3 , mt-4" >
            <Form.Label>From</Form.Label>
            <Form.Control as="select" onChange={handleChange2}>
              /* A ternary operator. It is a shorthand for an if/else statement. */
              {currenciesListArray?.map((currency, id) => (
                <option key={id} value={id}>{currency} {currenciesList[currency]}</option>
              ))}
            </Form.Control>
          </Form.Group>

          <BsArrowLeftRight className='mt-2'/>

          <Form.Group className="mb-3, mt-4" >
            <Form.Label>To</Form.Label>
            <Form.Control as="select" onChange={handleChange2}>
              <option
                onChange={handleChange2}
              >
                Select Currency
              </option>
            </Form.Control>
          </Form.Group>

          {/* Crear boton que hace la comversion de las divisas */}
          <Form.Group className="mb-3, mt-4" >
            <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Convert</button>
          </Form.Group>

        </Form>
        </div>

      </Container>
    </>
  )
}
