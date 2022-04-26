import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./style.css";

import { fetchProducts } from "../../store/products/actions";
import { selectProducts } from "../../store/products/selectors";
import {
  Container,
  Card,
  Row,
  Col,
  Button,
  Form,
  FormControl,
} from "react-bootstrap";
import { BsSearch } from "react-icons/bs";

import ProductCard from "./ProductCard";
import Hero from "../../components/Hero";

export default function Products() {
  const dispatch = useDispatch();
  const items = useSelector(selectProducts);


  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const [searchTerm, setSearchTerm] = useState("");

  //filter
  const [filteredPrice, setFilteredPrice] = useState([...items]);
  const [price, setPrices] = useState(0);

  const checkAndSetPrices = (value) => {
    if (price === value) {
      setPrices(0);
      return;
    }
    setPrices(value);
  };

  //search

  const filterProduct = [...filteredPrice].filter((product) => {
    return product.title.toLowerCase().includes(searchTerm.toLowerCase());
  });

  //pagination
  const [offset, setoffset] = useState(0);

  const getNextProducts = () => {
    setoffset(offset + 6);
  };

  const getPreviousProducts = () => {
    setoffset(offset - 6);
  };

  //rating for side bar

  useEffect(() => {
    setFilteredPrice(
      price === 0
        ? [...items]
        : [...items].filter((product) => {
            return product.price <= price && product.price >= price - 200;
          })
    );
  }, [items, price]);

  return (
    <div>
      <Hero />
      <Container>
        <div>
          <span className="search">Search:</span>
          <input
            type="search"
            placeholder=""
            className="me-1"
            aria-label="Search"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />
        </div>

        <h1>Products</h1>

        <Row>
          <Col sm={3}>
            <Card>
              <Card.Title>Filter By Price</Card.Title>
              <div>
                <Button
                  value={200}
                  onClick={(e) => {
                    checkAndSetPrices(e.target.value);
                  }}
                >
                  {" "}
                  0-$200
                </Button>
                <hr />
                <Button
                  value={400}
                  onClick={(e) => {
                    checkAndSetPrices(e.target.value);
                  }}
                >
                  {" "}
                  $200-$400
                </Button>
                <hr />
                <Button
                  value={600}
                  onClick={(e) => {
                    checkAndSetPrices(e.target.value);
                  }}
                >
                  {" "}
                  $400-$600
                </Button>
                <hr />
                <Button
                  value={800}
                  onClick={(e) => {
                    checkAndSetPrices(e.target.value);
                  }}
                >
                  {" "}
                  $600-$800
                </Button>
                <hr />
                <Button
                  value={1000}
                  onClick={(e) => {
                    checkAndSetPrices(e.target.value);
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
              {filterProduct.map((item, index) => {
                return (
                  offset <= index &&
                  index <= offset + 5 && (
                    <ProductCard
                      key={item.id}
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
            disabled={offset >= filterProduct.length - 5}
          >
            Next
          </Button>
        </div>
      </Container>
    </div>
  );
}
