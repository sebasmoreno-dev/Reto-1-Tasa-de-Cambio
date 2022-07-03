import { useGetCurrenciesQuery } from '../../store/api/exchangeApi';
import { useDispatch } from 'react-redux';
import { useForm } from '../../hooks/useForm';

import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { BsBarChartFill, BsArrowLeftRight } from "react-icons/bs";
import { MdSend } from "react-icons/md";
import { FaCoins } from "react-icons/fa";
import { AiFillAlert } from "react-icons/ai";





export const Home = () => {

  const dispatch = useDispatch();

  const { base, date, amount, target, currency, onInputChange } = useForm({
    base: '',
    date: '',
    amount: '',
    target: '',
    currency: '',
  });

  const getCurrienciesData = (e) => {
    e.preventDefault();
    dispatch(useGetCurrenciesQuery());
  }
  
console.log(useGetCurrenciesQuery());


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
                  <select class="form-select" aria-label="Default select example">
                    <option selected>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                {/* <Form.Control type="email" placeholder="USD - USD Dollar" />
                <Form.Text className="text-muted">
                </Form.Text> */}
              </Col>

              <BsArrowLeftRight />

              <Col>
                <p>To</p>
                <Form.Control type="text" placeholder="EUR - Euro" />
                <Form.Text className="text-muted">
                </Form.Text>
              </Col>

          </Row>
          </Form.Group>
        </Form>
        </div>

      </Container>
    </>
  )
}
