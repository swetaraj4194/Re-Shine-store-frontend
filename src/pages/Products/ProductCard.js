import React, { useEffect } from "react";

import "./style.css";

import { Card, Button, Row, Col } from "react-bootstrap";
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
    <Link style={{ maxWidth: "800px", width: "18rem" }} to={`/${props.id}`}>
      <Card key={props.id}>
        <Card.Img className="" src={props.mainImage} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>€{props.price}</Card.Text>
          <Card.Text>
            <ReactStars {...rating}></ReactStars>
          </Card.Text>{" "}
          {/* <Link to={`/${props.id}`}>
          <Button className="web-color" variant="primary">
            Details
          </Button>
        </Link> */}
        </Card.Body>
      </Card>
    </Link>
  );
}
