import React, { useEffect } from "react";

import "./style.css";
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
    <Link
      style={{
        maxWidth: "800px",
        width: "18rem",
        textDecoration: "none",
        color: "black",
      }}
      to={`/${props.id}`}
    >
      {/* <Card key={props.id}>
        <Card.Img  src={props.mainImage} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>€{props.price}</Card.Text>
          <Card.Text>
            <ReactStars {...rating}></ReactStars>
          </Card.Text>{" "}
         
        </Card.Body>
      </Card> */}

      <div class="card" style={{ width: "18rem" }}>
        <img
          src={props.mainImage}
          class="mcard-img-top"
          style={{
            maxWidth: "400px",
            maxHeight: "250px",
            backgroundSize: "cover",
          }}
          alt="..."
        />
        <h2 className="h6 p-2 m-0 text-lowercase">{props.title}</h2>
        <p class="p-2 m-0">€{props.price}</p>
        <ReactStars className="p-2 m-0" {...rating}></ReactStars>
      </div>
    </Link>
  );
}
