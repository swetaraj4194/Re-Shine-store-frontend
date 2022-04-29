import React from "react";
import { Card, Container } from "react-bootstrap";
import Hero from "../../components/Hero";

export default function About() {
  return (
    <div>
      <Hero url="https://cdn.sanity.io/images/ilmr7lwv/production_v2/254e59bdc48d47330bb503b8727b653eb0c72fbf-10230x3071.png?q=100&fm=jpg&auto=format&w=1920" />
      <Container>
        <div className="p-5">
          <h1>Know us</h1>
          <p>
            The <strong>Re-Shine Store</strong> is a platform for buying and
            selling services and goods such as electronics, fashion items,
            furniture, household goods, cars and bikes.Here you can give your
            household items a new owner ,a new house and a new family. We bring
            together people who would like to buy products they need without
            spending hefty money on new products with the people who want to
            sell the same products which they do not need anymore.
          </p>

          <div class="mb-3 p-2" style={{ maxwidth: "200px" }}>
            <h3 className="m-4"> Contact to Seller</h3>
            <div class="p-3 row g-0 mb-3">
              <div class="col-md-4">
                <img
                  class="img-fluid rounded-start"
                  alt="logo"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3IwzyntUSlgizfjgysIKY-ks_W3263T5XBQ&usqp=CAU"
                ></img>
              </div>

              <div class="col-md-4 card-body">
                <div class="card-body">
                  <p>
                    We believe that second-hand luxury is the key to a more
                    sustainable future. Our buyers and sellers support circular
                    fashion and combat wastage, by giving new life to pre-loved
                    luxury items.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
