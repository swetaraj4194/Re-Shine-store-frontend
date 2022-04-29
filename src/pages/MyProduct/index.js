import React, { useEffect } from "react";
import ReactStars from "react-rating-stars-component";
import { Button, Card, Carousel, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import Loading from "../../components/Loading";
import { deleteProduct } from "../../store/user/actions";
import {
  selectUser,
  selectMyProduct,
  selectToken,
} from "../../store/user/selectors";

export default function MyProduct() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector(selectUser);
  const product = useSelector(selectMyProduct);
  const token = useSelector(selectToken);

  useEffect(() => {
    if (!token) navigate("/login");
  }, [token]);

  const onDelete = (id) => {
    dispatch(deleteProduct(id));
  };

  if (product === null) {
    return <Loading />;
  }

  return (
    <Container className="p-4">
      <p>Click here to see your Bid Details</p>
      <Link className="p-5" to={`/productBid/${user.id}`}>
        <Button variant="primary">Bid History</Button>
      </Link>
      <hr />
      <Card.Title>My Products</Card.Title>

      <Row
        xs={1}
        md={2}
        className=""
        style={{ columnGap: "15px", rowGap: "15px" }}
      >
        {product.length === 0
          ? "No product added yet"
          : product.map((items) => {
              const rating = {
                size: 20,
                value: items.ratings,
                isHalf: true,
                edit: false,
              };
              return (
                <Card
                  clssName=" d-flex"
                  style={{ width: "18rem" }}
                  key={product.id}
                >
                  <Carousel>
                    <Carousel.Item>
                      <img
                        className="w-100"
                        // class="mcard-img-top"
                        src={items.mainImage}
                        alt={"details.title"}
                      />
                    </Carousel.Item>
                    {items.images.map((item) => (
                      <Carousel.Item key={item.id}>
                        <img className="w-100" src={item.image} alt={item.id} />
                      </Carousel.Item>
                    ))}
                  </Carousel>

                  <Card.Body>
                    <Card.Title className="text-lowercase">
                      {items.title}
                    </Card.Title>
                    <Card.Text>€{items.price}</Card.Text>
                    <Card.Text>
                      <ReactStars {...rating}></ReactStars>
                    </Card.Text>{" "}
                    <Button variant="danger" onClick={() => onDelete(items.id)}>
                      Delete
                    </Button>
                    <Link to={`/${items.id}`}>
                      <Button variant="primary">Details</Button>
                    </Link>
                  </Card.Body>
                </Card>
              );
            })}
      </Row>
    </Container>
  );
}
