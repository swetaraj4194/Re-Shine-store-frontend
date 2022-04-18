import React from "react";
import { Nav } from "react-bootstrap";
// import NavbarItem from "./NavbarItem";
import { BsFillPersonFill } from "react-icons/bs";

export default function LoggedOut() {
  return (
    <>
      <Nav.Link href="/login">
        <div style={{ fontSize: "30px", color: "rgb(0, 123, 255)" }}>
          <BsFillPersonFill />
        </div>
      </Nav.Link>
      {/* <NavbarItem path="/login" linkText="Login" /> */}
    </>
  );
}
