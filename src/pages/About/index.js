import React from "react";
import { Card } from "react-bootstrap";
import HeroAbout from "./HeroAbout"
export default function About() {
  return (
    <div>
      <HeroAbout />
      <Card>
        The Re-Shine Store is a platform for buying and selling services and
        goods such as electronics, fashion items, furniture, household goods,
        cars and bikes.Here you can give your household items a new owner ,a new house and a new family.
        We bring together people who would like to buy products they need without spending 
        hefty money on new products with the people who want to sell the same products which they do not need anymore.
      </Card>
    </div>
  );
}
