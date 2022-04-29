import React, { useState } from "react";
import "./style.css";
import { NavLink, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectToken } from "../../store/user/selectors";

import LoggedIn from "./LoggedIn";
import LoggedOut from "./LoggedOut";
import { BsFillBrightnessAltHighFill } from "react-icons/bs";

import {

  Button,
  Container,

  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import NavbarItem from "./NavbarItem";

export default function Navigation() {
  const token = useSelector(selectToken);

  const loginLogoutControls = token ? <LoggedIn /> : <LoggedOut />;

  return (
    <Navbar expand="lg" className="navbar">
      <Container fluid className="d-flex">
        <Navbar.Brand href="/">
          <Nav.Link className="title">
            <BsFillBrightnessAltHighFill
              style={{
                fontSize: "36px",
                color: "yellow",
                textAlign: "center",
                margin: "10px 5px",
              }}
            />
            <Link className="logo" to="/">
              Re-Shine Store
            </Link>
          </Nav.Link>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 "
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>

            <NavDropdown title="Products" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/">All</NavDropdown.Item>

              <NavDropdown.Item href="/category/1">
                Electronics
              </NavDropdown.Item>

              <NavDropdown.Item href="/category/2">Jewelery</NavDropdown.Item>

              <NavDropdown.Item href="/category/3">
                Men's Clothing
              </NavDropdown.Item>

              <NavDropdown.Item href="/category/4">
                Women's Clothing
              </NavDropdown.Item>

              <NavDropdown.Item href="/category/5">Furniture</NavDropdown.Item>
              <NavDropdown.Item href="/category/6">
                Home Decoration
              </NavDropdown.Item>

              <NavDropdown.Item href="/category/7">Plants</NavDropdown.Item>

              <NavDropdown.Item href="/category/8">Other</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="/about">About us</Nav.Link>
            <Nav.Link href="/help">Help</Nav.Link>
          </Nav>

          <Nav.Link href="/newItem">
            <Button className="btn btn-light">SELL</Button>
          </Nav.Link>

          {token && <NavbarItem path="/myProducts" linkText="My Items" />}
          {loginLogoutControls}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
