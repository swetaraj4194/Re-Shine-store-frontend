import React from "react";
import { Card, Container } from "react-bootstrap";
import Hero from "../../components/Hero";
import { BsEnvelopeFill } from "react-icons/bs";
export default function Help() {
  return (
    <div>
      <Hero url="https://cdn.pixabay.com/photo/2016/09/01/19/53/pocket-watch-1637396__340.jpg" />

      <Container>
        <div className="p-5">
          <h1>Contact us</h1>

          <div className="d-flex flex-row p-5">
            <Card.Img
              alt="logo"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoR-Ah7pYBR_sf4nipKckrUOPYxVfZU2Bjmg&usqp=CAU"
            ></Card.Img>

            <Card.Body className="p-5">
              <div
                className="d-flex flex-row p-5"
                style={{ fontSize: "30px", color: "black" }}
              >
                <div>
                  <BsEnvelopeFill />
                </div>
                <div>
                  <strong>swetaraj4194@gmail.com</strong>
                  <p style={{ fontSize: "20px", color: "black" }}>
                    We reply within 2 days Monday to Friday
                  </p>
                </div>
              </div>
            </Card.Body>
          </div>
        </div>
      </Container>
    </div>
  );
}
