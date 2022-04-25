import React from "react";
import { Nav } from "react-bootstrap";
// import NavbarItem from "./NavbarItem";
// import { BsFillPersonFill } from "react-icons/bs";
import NavbarItem from "./NavbarItem";
import "./style.css"
export default function LoggedOut() {
  return (
    <>
      {/* <Nav.Link href="/login">
        <div style={{ fontSize: "30px", color: "rgb(0, 123, 255)" }}>
          <BsFillPersonFill />
        </div>
        Login to sell
      </Nav.Link> */}

      <div style={{ fontSize: "20px" ,color:"white"}}>
        <NavbarItem path="/login" linkText="Login" />
      
      </div>
    </>
  );
}
