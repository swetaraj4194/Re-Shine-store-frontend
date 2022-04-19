import React, { useEffect } from "react";

import "./style.css";

import { Card, Button } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";

export default function CategoryCard(props) {
  // console.log("product",items)

  const rating = {
    size: 20,
    value: props.rating,
    isHalf: true,
    edit: false,
  };

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={props.mainImage} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>${props.price}</Card.Text>
        <Card.Text>
          <ReactStars {...rating}></ReactStars>
        </Card.Text>
        <Button variant="primary">Read More</Button>
      </Card.Body>
    </Card>
  );
}
