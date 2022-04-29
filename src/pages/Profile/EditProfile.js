import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useSelector, useDispatch } from "react-redux";
import { selectUser } from "../../store/user/selectors";
import { updateUser } from "../../store/user/actions";

export default function EditProfile() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email || "");
  const [phone, setPhone] = useState(user.phone);
  const id = user.id;

  function submitForm(e) {
    dispatch(updateUser(name, email, phone, id));
  }

  return (
    <Form className="p-5 " onSubmit={submitForm}>
      <h1 className=" mb-5">Edit your profile</h1>
      <Form.Group>
        <Form.Label>Name</Form.Label>
        <Form.Control
          value={name}
          onChange={(event) => setName(event.target.value)}
          type="text"
          placeholder="Update your name"
          required
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Email</Form.Label>
        <Form.Control
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          type="text"
          placeholder="Update your name"
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Phone</Form.Label>
        <Form.Control
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
          type="text"
        />
      </Form.Group>
      <Form.Group className="mt-5">
        <Button variant="primary" type="submit" onClick={() => submitForm()}>
          Save changes
        </Button>
      </Form.Group>
    </Form>
  );
}
