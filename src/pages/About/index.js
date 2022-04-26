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
          <div className="d-flex flex-row p-5">
            <Card.Img
              alt="logo"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3IwzyntUSlgizfjgysIKY-ks_W3263T5XBQ&usqp=CAU"
            ></Card.Img>
            <Card className="p-5 m-5">
              <p>
                We believe that second-hand luxury is the key to a more
                sustainable future. Our buyers and sellers support circular
                fashion and combat wastage, by giving new life to pre-loved
                luxury items.
              </p>
            </Card>
          </div>
        </div>
      </Container>
    </div>
  );
}
