import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { postStory } from "../../store/user/actions";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { Col } from "react-bootstrap";

export default function MySpace() {
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const [imageUrl, setImage] = useState("");

  const dispatch = useDispatch();
  
  const navigate = useNavigate();

 function submitForm(event) {
   event.preventDefault();

   dispatch(postStory(name, content, imageUrl));

   setName("");
   setContent("");
   setImage("");
 }

  return (
    <Container>
      <Form as={Col} md={{ span: 6, offset: 3 }} className="mt-5">
        <h1 className="mt-5 mb-5">Post Story</h1>
        <Form.Group controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            value={name}
            onChange={(event) => setName(event.target.value)}
            type="text"
            placeholder="Enter name"
            required
          />
        </Form.Group>
        <Form.Group controlId="formBasicText">
          <Form.Label>create content</Form.Label>
          <Form.Control
            value={content}
            onChange={(event) => setContent(event.target.value)}
            type="email"
            placeholder="Write content"
            required
          />
          {/* <Form.Text className="text-muted">
            you can see the post on space Page
          </Form.Text> */}
        </Form.Group>

        <Form.Group >
          <Form.Label>imageUrl</Form.Label>
          <Form.Control
            value={imageUrl}
            onChange={(event) => setImage(event.target.value)}
            type="text"
            placeholder="url"
            
          />
        </Form.Group>
        <Form.Group className="mt-5">
          <Button variant="primary" type="submit" onClick={submitForm}>
            Post
          </Button>
        </Form.Group>
        <Link to="/myspace">Click here to go Myspace Page</Link>
      </Form>
    </Container>
  );
}
