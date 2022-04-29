import React from "react";
import "./styles.css";
export default function Hero(props) {
  return (
    <div
      style={{ backgroundImage: `url(${props.url})` }}
      className="hero-banner"
    ></div>
  );
}
