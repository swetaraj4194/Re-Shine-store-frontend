import React, { useEffect } from "react";

import "./style.css";

import { Card, Button } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

export default function ProductCard(props) {
  const rating = {
    size: 20,
    value: props.rating,
    isHalf: true,
    edit: false,
  };

  return (
    <Card style={{ width: "18rem" }} key={props.id}>
      <Card.Img variant="top" src={props.mainImage} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>${props.price}</Card.Text>
        <Card.Text>
          <ReactStars {...rating}></ReactStars>
        </Card.Text>{" "}
        <Link to={`/${props.id}`}>
          <Button variant="primary">Details</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}
