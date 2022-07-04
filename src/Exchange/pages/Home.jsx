import { useGetCurrenciesQuery, useGetCurrencyBaseQuery } from '../../store/api/exchangeApi';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from '../../hooks/useForm';

import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { BsBarChartFill, BsArrowLeftRight } from "react-icons/bs";
import { MdSend } from "react-icons/md";
import { FaCoins } from "react-icons/fa";
import { AiFillAlert } from "react-icons/ai";
import { setCurrencies } from '../../store/exchangeSlice';



export const Home = () => {

  const dispatch = useDispatch();
  /* const currencies = useSelector(state => state.currencies); */

  const { data } = useGetCurrencyBaseQuery(
    {
      base: 'USD',
      target: 'USD',
      amount: 1,
      code: 'USD',
    }
  );
  console.log(data);

  const { data: currenciesList } = useGetCurrenciesQuery();
  console.log(currenciesList);



  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setCurrencies(Form));
  }

  const handleChange2 = (e) => {
    handleChange2(e);
    dispatch(setCurrencies(Form));
  }





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
          <Form.Group className="mb-3">
            <Row className="mb-3 mt-5 align-items-center">
              <Col>
                <p>Amount</p>
                <Form.Control type="number" placeholder="$1.00" />
                <Form.Text className="text-muted">
                </Form.Text>
              </Col>

              <Col>
                <p>From</p>
                  <Form.Select
                    size="lg"
                  >
                      {/* {
                        data.map(item => (
                        <option key={item.code} value={item.code}>{item.base}</option>
                        ))
                      } */}
                  </Form.Select>
              </Col>

              <BsArrowLeftRight />

              <Col>
                <p>To</p>
                <Form.Select size="lg">
                    <option>Large select</option>
                  </Form.Select>
              </Col>

          </Row>
          </Form.Group>
        </Form>
        </div>

      </Container>
    </>
  )
}
