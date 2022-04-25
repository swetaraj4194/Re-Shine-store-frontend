import React, { useEffect } from "react";
import ReactStars from "react-rating-stars-component";
import { Button, Card, CardGroup, Carousel, Container } from "react-bootstrap";
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

  if (product === null) {
    return <Loading />;
  }

  const onDelete = (id) => {
    dispatch(deleteProduct(id));
  };

  return (
    <Container>
      <Card.Title>My Product</Card.Title>

      <Card.Title>{user.name}</Card.Title>
      <CardGroup style={{ display: "flex", flexDirection: "column" }}>
        {product.map((items) => {
          const rating = {
            size: 20,
            value: items.ratings,
            isHalf: true,
            edit: false,
          };
          return (
            <Card style={{ width: "18rem" }} key={product.id}>
              <Carousel.Item>
                <img
                  className="w-100"
                  src={items.mainImage}
                  alt={"details.title"}
                />
              </Carousel.Item>
              <Carousel>
                {items.images.map((item) => (
                  <Carousel.Item key={item.id}>
                    <img className="w-100" src={item.image} alt={item.id} />
                  </Carousel.Item>
                ))}
              </Carousel>

              <Card.Body>
                <Card.Title>{items.title}</Card.Title>
                <Card.Text>${items.price}</Card.Text>
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
      </CardGroup>
      <Card>
        <Link to={`/productBid/${user.id}`}>
          <Button variant="primary">Bid History</Button>
        </Link>
      </Card>
    </Container>
  );
}
