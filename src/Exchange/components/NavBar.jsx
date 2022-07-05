import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


export const NavBar = () => {
  return (
    <>
      <Navbar  bg="primary" variant="dark" className='d-flex justify-content-between'>

        

        <Nav>
            <Link
            className="navbar-brand"
            to="/home"
        >
            Home
        </Link>

        <Link
            className="navbar-brand"
            to="/business"
        >
            Business
        </Link>
        </Nav>

        <Nav className="justify-content-center ">
            <Nav.Item className="navbar-nav">

                <NavLink
                    className="nav-item nav-link"
                    to="/sendMoney"
                >
                    Send Money
                </NavLink>

                <NavLink
                    className="nav-item nav-link"
                    to="/tools"
                >
                    Tools
                </NavLink>

                <NavLink
                    className="nav-item nav-link"
                    to="/resources"
                >
                    Resources
                </NavLink>
            </Nav.Item>
        </Nav>

        <Nav className="justify-content-end">
            <Nav.Item className="navbar-nav ml-auto">
                <NavLink
                    className="nav-item nav-link"
                    to="/signIn"
                >
                Sign In
            </NavLink>

            <NavLink
                    className="nav-item nav-link"
                    to="/getTheApp"
                >
                Get The App
            </NavLink>
            </Nav.Item>

        </Nav>
    </Navbar>
</>
)
}
