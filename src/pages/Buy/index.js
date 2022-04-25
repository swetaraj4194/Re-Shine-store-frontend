import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { Container, Card } from "react-bootstrap";

import Loading from "../../components/Loading";
import { fetchSellerById } from "../../store/products/actions";
import { sellerDetails } from "../../store/products/selectors";

export default function Buy() {
  const { id } = useParams();
  const details = useSelector(sellerDetails);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSellerById(id));
  }, [dispatch]);

  if (!details || parseInt(details.id) !== parseInt(id)) return <Loading />;

  return (
    <Container>
      <h1> Seller Details</h1>
      <Card.Title>Name: {details.user.name}</Card.Title>
      <Card.Title>Email: {details.user.email}</Card.Title>
      <Card.Title>Contact: {details.user.phone}</Card.Title>
    </Container>
  );
}
