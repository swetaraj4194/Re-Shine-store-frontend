import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Card, Row, Col, Button } from "react-bootstrap";
import "./style.css";
import { useParams } from "react-router-dom";

import Loading from "../../components/Loading";
import { fetchCategory } from "../../store/products/actions";
import { selectCategories } from "../../store/products/selectors";
import CategoryCard from "./categoryCard";
import Hero from "../../components/Hero";

export default function Category() {
  const { id } = useParams();

  const dispatch = useDispatch();
  const items = useSelector(selectCategories);

  useEffect(() => {
    dispatch(fetchCategory(id));
  }, [dispatch]);

  const [price, setPrices] = useState(0);
  const [offset, setoffset] = useState(0);

  const getNextProducts = () => {
    setoffset(offset + 6);
  };

  const getPreviousProducts = () => {
    setoffset(offset - 6);
  };

  if (!items || parseInt(items.id) !== parseInt(id)) return <Loading />;

  const filteredPrice =
    price === 0
      ? [...items.products]
      : [...items.products].filter((product) => {
          return product.price <= price && product.price >= price - 200;
        });

  return (
    <div>
      <Hero />

      <Container>
        <h1>{items.category}</h1>

        <Row>
          <Col sm={3}>
            <Card>
              <Card.Title>Filter By Price</Card.Title>
              <div>
                <Button
                  value={200}
                  onClick={(e) => {
                    if (!e.target.value) {
                      setPrices(0);
                    } else {
                      setPrices(e.target.value);
                    }
                  }}
                >
                  {" "}
                  0-$200
                </Button>
                <hr />
                <Button
                  value={400}
                  onClick={(e) => {
                    if (!e.target.value) {
                      setPrices(0);
                    } else {
                      setPrices(e.target.value);
                    }
                  }}
                >
                  {" "}
                  $200-$400
                </Button>
                <hr />
                <Button
                  value={600}
                  onClick={(e) => {
                    if (!e.target.value) {
                      setPrices(0);
                    } else {
                      setPrices(e.target.value);
                    }
                  }}
                >
                  {" "}
                  $400-$600
                </Button>
                <hr />
                <Button
                  value={800}
                  onClick={(e) => {
                    if (!e.target.value) {
                      setPrices(0);
                    } else {
                      setPrices(e.target.value);
                    }
                  }}
                >
                  {" "}
                  $600-$800
                </Button>
                <hr />
                <Button
                  value={1000}
                  onClick={(e) => {
                    if (!e.target.value) {
                      setPrices(0);
                    } else {
                      setPrices(e.target.value);
                    }
                  }}
                >
                  {" "}
                  $800+
                </Button>
              </div>
            </Card>
          </Col>

          <Col sm={9}>
            <Row xs={1} md={2} className="g-4" style={{ columnGap: "30px" }}>
              {filteredPrice.map((item, index) => {
                return (
                  offset <= index &&
                  index <= offset + 5 && (
                    <CategoryCard
                      id={item.id}
                      mainImage={item.mainImage}
                      title={item.title}
                      price={item.price}
                      rating={item.ratings}
                    />
                  )
                );
              })}
            </Row>
          </Col>
        </Row>

        <div className="buttons">
          <Button
            className="btn"
            onClick={getPreviousProducts}
            disabled={offset === 0}
          >
            Previous
          </Button>

          <Button
            className="btn"
            onClick={getNextProducts}
            disabled={offset >= filteredPrice.length - 5}
          >
            Next
          </Button>
        </div>
      </Container>
    </div>
  );
}
