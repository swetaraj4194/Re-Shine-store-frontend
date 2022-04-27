import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import {
  Container,
  Card,
  Row,
  Col,
  Button,
  Carousel,
  Form,
} from "react-bootstrap";

import Loading from "../../components/Loading";
import { fetchProductsById } from "../../store/products/actions";
import { selectProductDetails } from "../../store/products/selectors";
import { selectToken } from "../../store/user/selectors";
import { postComments } from "../../store/products/actions";
import { postBidAmount } from "../../store/products/actions";
import RatingCard from "./RatingCard";

export default function SpaceDetails() {
  const { id } = useParams();
  const details = useSelector(selectProductDetails);
  const token = useSelector(selectToken);

  // console.log("product",product)

  const dispatch = useDispatch();

  const [heighestBid, setHeighestBid] = useState();
  const [comments, setComments] = useState("");

  //function  to post bid
  function postBid(event) {
    event.preventDefault();
    dispatch(postBidAmount(details.id, heighestBid));
    setHeighestBid("");
  }

  useEffect(() => {
    dispatch(fetchProductsById(id));
  }, [dispatch, id]);

  // function to post comments
  function addComment(event) {
    event.preventDefault();

    dispatch(postComments(details.id, comments));

    setComments("");
  }

  if (!details || parseInt(details.id) !== parseInt(id)) return <Loading />;

  return (
    <Container className="p-5">
      <Row>
        <Col sm={7} style={{ width: "38rem" }} className="m-2">
          <Carousel>
            {details?.images.map((item) => (
              <Carousel.Item key={item.id}>
                <img className="w-100" src={item.image} alt={item.id} />
              </Carousel.Item>
            ))}
            <Carousel.Item>
              <img
                className="w-100"
                src={details.mainImage}
                alt={"details.title"}
              />
            </Carousel.Item>
          </Carousel>
        </Col>

        <Col sm={4}>
          <Row xs={1} md={2} className="g-4" style={{ columnGap: "30px" }}>
            <Card.Body>
              <Card.Title>{details.title}</Card.Title>
              <Card.Title>{details.description}</Card.Title>
              <Card.Text>${details.price}</Card.Text>
              <RatingCard rating={details.ratings}></RatingCard>
            </Card.Body>

            <Link to={`/buy/${details.id}`}>
              <Button variant="primary">Contact seller</Button>
            </Link>
          </Row>
        </Col>
      </Row>

      <div className="mt-5">
        <h3>Bids for this product</h3>

        {details?.bids?.length ? (
          <table className="table table-striped" style={{ width: "30%" }}>
            <thead class="thead-dark">
              <tr>
                <th>Email</th>
                <th>Bid Amout</th>
              </tr>
            </thead>

            {details.bids?.map((bid) => {
              return (
                <tr>
                  <td className="p-2">{bid.email}</td>
                  <td className="p-2">{bid.amount}</td>
                </tr>
              );
            })}
          </table>
        ) : (
          <h3 className="text-muted">No Bids yet!!!</h3>
        )}

        {token ? (
          <div>
            <Form className="mb-5 d-flex" type="submit" onSubmit={postBid}>
              <Form.Control
                style={{ width: "30%", marginRight: "10px" }}
                value={heighestBid}
                onChange={(event) => setHeighestBid(event.target.value)}
                type="Number"
                placeholder="Enter Amount"
                required
              />
              <Button className=" mr-2" variant="primary" type="submit">
                Post Bid
              </Button>
            </Form>
          </div>
        ) : (
          <Link to="/login">
            <Button className="mb-4">Login to add Bid</Button>
          </Link>
        )}
      </div>

      <div class="container">
        <div class="row">
          {details?.reviews?.map((comment) => {
            return (
              <div
                key={comment?.id}
                class="col-lg-4 col-md-4 col-sm-4 col-xs-12"
                style={{
                  backgroundColor: "#a6bfeb",
                  borderRadius: "10px",
                  color: "black",
                  marginRight: "10px",
                  padding: "10px",
                }}
              >
                <div class="box-part text-center p-2">
                  <div class="title" className=" text-center">
                    <h4>{comment?.name}</h4>
                  </div>

                  <div class="text">
                    <span>{comment?.review}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-5">
        {token ? (
          <Form className="mb-5 d-flex" type="submit" onSubmit={addComment}>
            <Form.Control
              as="textarea"
              rows={3}
              style={{ width: "30%", marginRight: "10px" }}
              value={comments}
              onChange={(event) => setComments(event.target.value)}
              type="Text"
              placeholder="write comment"
            />

            <Button variant="primary" type="submit">
              Post comment
            </Button>
          </Form>
        ) : (
          <Link to="/login">
            <Button>Login to post comments</Button>
          </Link>
        )}
      </div>
    </Container>
  );
}
