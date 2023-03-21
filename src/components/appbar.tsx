import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import List from "bootstrap-icons/icons/list.svg";
import Button from 'react-bootstrap/Button';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useMediaQuery } from "react-responsive";
import { useAppSelector } from "./redux/store";

export default function MyAppBar() {
  const mobileDisplay = useMediaQuery({ query: "(max-width: 600px)" });
  const tabletDisplay = useMediaQuery({ query: "(max-width: 768px)" });

  const categories = useAppSelector((state) => state.product.categories);

  return (
    <Navbar style={{ background:'rgba(139, 168, 142, 0.7)', backdropFilter: 'blur(25px)' }} expand='md' sticky='top' >
      <Container>
        <Navbar.Brand>Storify</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className='justify-content-end' id="basic-navbar-nav" >
          <Nav className="d-flex gap-3">
            <NavDropdown className='text-capitalize' title="Categories" id="navbarScrollingDropdown">
              {categories && categories.map(item=>
                <NavDropdown.Item href={`${item}`}>
                  {item}
                </NavDropdown.Item>)
              }
            </NavDropdown>
            {!tabletDisplay ? <Form className="d-flex position-relative">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2 rounded-pill pe-5 me-3"
                aria-label="Search"
              >
              </Form.Control>
              <i className="bi bi-search position-absolute me-4 top-50 end-0 translate-middle"></i>
            </Form> : null}
            <Nav.Link>
              <div className='d-flex gap-2'>
                <i className="bi bi-heart"></i>
                Favorite
              </div>
            </Nav.Link>
            <Nav.Link>
              <div className='d-flex gap-2'>
                <i className="bi bi-bag"></i>
                Cart
              </div>
            </Nav.Link>
            <Nav.Link>
              <div className='d-flex gap-2'>
                <i className="bi bi-person"></i>
                User
              </div>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
