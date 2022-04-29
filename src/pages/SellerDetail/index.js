import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { Container, Card } from "react-bootstrap";

import Loading from "../../components/Loading";
import { fetchSellerById } from "../../store/products/actions";
import { sellerDetails } from "../../store/products/selectors";
import Hero from "../../components/Hero";

export default function SellerDetail() {
  const { id } = useParams();
  const details = useSelector(sellerDetails);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSellerById(id));
  }, [dispatch]);

  if (!details || parseInt(details.id) !== parseInt(id)) return <Loading />;

  return (
    <div>
      <Hero url="https://cdn.pixabay.com/photo/2020/05/19/10/23/banner-5190090__340.jpg" />

      <Container class="mb-3 p-2" style={{ maxwidth: "200px" }}>
        <h3 className="m-4"> Contact to Seller</h3>
        <div class="p-3 row g-0 mb-3">
          <div class="col-md-4">
            <img
              class="img-fluid rounded-start"
              alt="logo"
              src="https://cdn.pixabay.com/photo/2017/08/18/16/38/paper-2655579__340.jpg"
            ></img>
          </div>

          <div class="col-md-4 card-body">
            <div class="card-body">
              <div class="card-title" style={{ fontSize: "25px" }}>
                Name: <strong> {details.user.name}</strong>
              </div>
              <div class="card-title">Email: {details.user.email}</div>
              <div class="card-title">Contact: {details.user.phone}</div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
