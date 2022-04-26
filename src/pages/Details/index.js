import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";

import {
  Container,
  Card,
  Row,
  Col,
  Button,
  Nav,
  Carousel,
  Table,
  Form,
} from "react-bootstrap";

import Loading from "../../components/Loading";
import { fetchProductsById } from "../../store/products/actions";
import { selectProductDetails } from "../../store/products/selectors";
import {
  selectToken,
  selectMyBid,
  selectMyProduct,
} from "../../store/user/selectors";
import { postBidAmount } from "../../store/user/actions";
import { postComments } from "../../store/user/actions";

import RatingCard from "./RatingCard";

export default function SpaceDetails() {
  const { id } = useParams();
  const details = useSelector(selectProductDetails);
  const token = useSelector(selectToken);
  const bids = useSelector(selectMyBid);
  const product = useSelector(selectMyProduct);
  // console.log("product",product)

  const dispatch = useDispatch();

  const [heighestBid, setHeighestBid] = useState(0);
  const [comments, setComments] = useState("");

  useEffect(() => {
    dispatch(fetchProductsById(id));
  }, [dispatch]);

  //function  to post bid
  function postBid(event) {
    event.preventDefault();

    dispatch(postBidAmount(details.id, heighestBid));

    setHeighestBid("");
  }

  // function to post comments

  function addComment(event) {
    event.preventDefault();

    dispatch(postComments(details.id, comments));

    setComments("");
  }

  if (!details || parseInt(details.id) !== parseInt(id)) return <Loading />;

  return (
    <Container>
      <h1>Details</h1>

      <Row>
        <Col sm={7} style={{ width: "38rem" }} className="m-2">
          <Carousel>
            {details.images.map((item) => (
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

        <Col sm={3}>
          <Row xs={1} md={2} className="g-4" style={{ columnGap: "30px" }}>
            <Card.Body>
              <Card.Title>{details.title}</Card.Title>
              <Card.Title>{details.description}</Card.Title>
              <Card.Text>${details.price}</Card.Text>
              <RatingCard rating={details.ratings}></RatingCard>
            </Card.Body>

            <Link to={`/buy/${details.id}`}>
              <Button variant="primary">Seller Detail</Button>
            </Link>
          </Row>
        </Col>

        <Col sm={2}>
          <Table className="striped bordered hover" size="sm">
            <Card.Title>BID</Card.Title>
            <tr>
              <th>Email</th>
              <th>Bid Amout</th>
            </tr>
            {details.bids.map((bid) => {
              return (
                <tr>
                  <td>{bid.email}</td>
                  <td>{bid.amount}</td>
                </tr>
              );
            })}

            <Card>
              {token ? (
                <Form type="submit" onSubmit={postBid}>
                  <Form.Group controlId="formBasicText">
                    <Form.Label> </Form.Label>

                    <Form.Control
                      value={heighestBid}
                      onChange={(event) => setHeighestBid(event.target.value)}
                      type="Number"
                      placeholder="Enter Amount"
                      required
                    />
                  </Form.Group>
                  <Form.Group className="mt-5">
                    <Button variant="primary" type="submit">
                      Post Bid
                    </Button>
                  </Form.Group>
                </Form>
              ) : (
                <Link to="/login">
                  <Button>Login to add Bid</Button>
                </Link>
              )}
            </Card>
          </Table>
        </Col>
      </Row>

      <Card>
        {details.reviews.map((comment) => {
          return (
            <Card>
              <Card.Title>Comments</Card.Title>
              <Card.Text>Name: {comment.name}</Card.Text>
              <Card.Text>comments: {comment.review}</Card.Text>
            </Card>
          );
        })}
      </Card>

      <Card>
        {token ? (
          <Form type="submit" onSubmit={addComment}>
            <Form.Group controlId="formBasicText">
              <Form.Label> </Form.Label>

              <Form.Control
                value={comments}
                onChange={(event) => setComments(event.target.value)}
                type="Text"
                placeholder="write comment"
              />
            </Form.Group>
            <Form.Group className="mt-5">
              <Button variant="primary" type="submit">
                Post comment
              </Button>
            </Form.Group>
          </Form>
        ) : (
          <Link to="/login">
            <Button>Login to post comments</Button>
          </Link>
        )}
      </Card>
    </Container>
  );
}
