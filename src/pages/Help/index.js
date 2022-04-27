import React from "react";
import { Card, Container } from "react-bootstrap";
import Hero from "../../components/Hero";
import { BsEnvelopeFill } from "react-icons/bs";
export default function Help() {
  return (
    <div>
      <Hero url="https://cdn.pixabay.com/photo/2016/09/01/19/53/pocket-watch-1637396__340.jpg" />

      <Container class="mb-3 p-2" style={{ maxwidth: "200px" }}>
        <h3 className="m-4"> Contact us</h3>
        <div class="p-3 row g-0 mb-3">
          <div class="col-md-4">
            <img
              class="img-fluid rounded-start"
              alt="logo"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoR-Ah7pYBR_sf4nipKckrUOPYxVfZU2Bjmg&usqp=CAU"
            ></img>
          </div>

          <div class="col-md-4 card-body">
            <div class="card-body d-flex p-2" style={{ fontSize: "20px" }}>
              <div class="card-title">
                <BsEnvelopeFill />
              </div>

              <div class="card-title">
                <strong> swetaraj4194@gmail</strong>
              </div>
            </div>

            <p>We reply within 2 days Monday to Friday</p>
          </div>
        </div>
      </Container>
    </div>
  );
}
