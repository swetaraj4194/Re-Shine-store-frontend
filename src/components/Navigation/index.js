import React from "react";
import "./style.css";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectToken } from "../../store/user/selectors";

import LoggedIn from "./LoggedIn";
import LoggedOut from "./LoggedOut";
import { BsFillCartFill } from "react-icons/bs";
import { BsFillBrightnessAltHighFill } from "react-icons/bs";

import {
  Button,
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";

export default function Navigation() {
  const token = useSelector(selectToken);

  const loginLogoutControls = token ? <LoggedIn /> : <LoggedOut />;

  return (
    <Navbar bg="warning" expand="lg">
      <Container className="d-flex">
        <Navbar.Brand href="/">
          <Nav.Link className="title">
            <BsFillBrightnessAltHighFill
              style={{ fontSize: "36px", color: "white", textAlign: "center", margin: "10px 5px" }}
            />
            Re-Shine Store
          </Nav.Link>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 menu"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>

            <NavDropdown title="Products" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action2">Electronics</NavDropdown.Item>
              <NavDropdown.Item href="#action3">Jewelery</NavDropdown.Item>

              <NavDropdown.Item href="#action4">
                Men's Clothing
              </NavDropdown.Item>

              <NavDropdown.Item href="#action5">
                Women's Clothing
              </NavDropdown.Item>

              <NavDropdown.Item href="#action6">Furniture</NavDropdown.Item>
              <NavDropdown.Item href="#action7">
                Home Decoration
              </NavDropdown.Item>

              <NavDropdown.Item href="#action7">Plants</NavDropdown.Item>

              <NavDropdown.Item href="#action8">Other</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="/about">About us</Nav.Link>
            <Nav.Link href="/help">Help</Nav.Link>
          </Nav>

          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-1"
              aria-label="Search"
            />

            <Button variant="outline-success">Search</Button>
          </Form>

          <Nav.Link style={{ fontSize: "30px", color: "rgb(0, 123, 255)" }}>
            <BsFillCartFill />
          </Nav.Link>

          {loginLogoutControls}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

// import React from "react";
// import Navbar from "react-bootstrap/Navbar";
// import Nav from "react-bootstrap/Nav";
// import { NavLink } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { selectToken } from "../../store/user/selectors";

// import LoggedIn from "./LoggedIn";
// import LoggedOut from "./LoggedOut";
// import {
//   Button,
//   Container,
//   Form,
//   FormControl,
//   NavDropdown,
// } from "react-bootstrap";

// export default function Navigation() {
//   const token = useSelector(selectToken);

//   const loginLogoutControls = token ? <LoggedIn /> : <LoggedOut />;

//   return (
//     <Navbar bg="light" expand="lg">
//       <Container>
//         <Navbar.Brand href="#">Re-Shine Store</Navbar.Brand>
//         <Navbar.Toggle aria-controls="navbarScroll" />
//         <Navbar.Collapse id="navbarScroll">
//           <Nav
//             className="me-auto my-2 my-lg-0"
//             style={{ maxHeight: "100px" }}
//             navbarScroll
//           >
//             <Nav.Link href="#action1">Home</Nav.Link>
//             {/* <Nav.Link href="#action2">Products</Nav.Link> */}
//             <NavDropdown title="Products" id="navbarScrollingDropdown">
//               <NavDropdown.Item href="#action2">Electronics</NavDropdown.Item>
//               <NavDropdown.Item href="#action3">Jewelery</NavDropdown.Item>

//               <NavDropdown.Item href="#action4">
//                 Men's Clothing
//               </NavDropdown.Item>

//               <NavDropdown.Item href="#action5">
//                 Women's Clothing
//               </NavDropdown.Item>

//               <NavDropdown.Item href="#action6">Furniture</NavDropdown.Item>
//               <NavDropdown.Item href="#action7">
//                 Home Decoration
//               </NavDropdown.Item>

//               <NavDropdown.Item href="#action7">Plants</NavDropdown.Item>
//             </NavDropdown>
//           </Nav>

//           <Form className="d-flex">
//             <FormControl
//               type="search"
//               placeholder="Search"
//               className="me-2"
//               aria-label="Search"
//             />

//             <Button variant="outline-success">Search</Button>
//           </Form>
//           {loginLogoutControls}

//           {/* <Nav>{loginLogoutControls}</Nav> */}
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }
