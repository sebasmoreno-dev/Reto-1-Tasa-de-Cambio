import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { BsBarChartFill, BsArrowLeftRight } from "react-icons/bs";
import { MdSend } from "react-icons/md";
import { FaCoins } from "react-icons/fa";
import { AiFillAlert } from "react-icons/ai";

export const RowItems = () => {
  return (
    <>
      <Row className="mb-3 mt-5 d-flex'">
          <Col className='d-flex align-items-center'><FaCoins size={25} className="mr-2"/>Convert</Col>
          <Col className='d-flex align-items-center'><MdSend size={25} className="mr-2"/> Send</Col>
          <Col className='d-flex align-items-center'><BsBarChartFill size={25} className="mr-2"/> Charts</Col>
          <Col className='d-flex align-items-center'><AiFillAlert size={25} className="mr-2"/> Alerts</Col>
        </Row>
    </>
  )
}
