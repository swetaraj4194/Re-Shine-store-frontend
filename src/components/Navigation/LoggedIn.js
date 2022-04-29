import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../store/user/actions";
import Button from "react-bootstrap/Button";
import { selectUser } from "../../store/user/selectors";
import Nav from "react-bootstrap/Nav";
import { BsFillPersonFill } from "react-icons/bs";

export default function LoggedIn() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  return (
    <>
      <Nav.Item style={{ padding: ".5rem 1rem" }}>
        <div style={{ fontSize: "30px", color: "white" }}>
          <Nav.Link href="/myProfile">
            {" "}
            <abbr title="My Profile">
              <BsFillPersonFill />
            </abbr>
          </Nav.Link>
          {/* <BsFillPersonFill /> */}
        </div>
      </Nav.Item>

      {/* <Nav.Item style={{ padding: ".5rem 1rem" }}>{user.email}</Nav.Item> */}

      <Button onClick={() => dispatch(logOut())}>Logout</Button>
    </>
  );
}
