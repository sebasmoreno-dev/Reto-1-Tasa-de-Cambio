import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BsBarChartFill, BsArrowLeftRight } from "react-icons/bs";
import { MdSend } from "react-icons/md";
import { FaCoins } from "react-icons/fa";
import { AiFillAlert } from "react-icons/ai";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export const Home = () => {
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
                <Form.Control type="email" placeholder="USD - USD Dollar" />
                <Form.Text className="text-muted">
                </Form.Text>
              </Col>

              <BsArrowLeftRight />

              <Col>
                <p>From</p>
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
