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
  const [searchTerm, setSearchTerm] = useState("");

  const getNextProducts = () => {
    setoffset(offset + 6);
  };

  const getPreviousProducts = () => {
    setoffset(offset - 6);
  };

  if (!items || parseInt(items.id) !== parseInt(id)) return <Loading />;

  //search

  const filteredPrice =
    price === 0
      ? [...items.products]
      : [...items.products].filter((product) => {
          return product.price <= price && product.price >= 0;
        });

  const filteredProduct = [...filteredPrice].filter((product) => {
    return product.title.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div>
      <Hero url="https://www.embpowerexp.com/wp-content/uploads/2020/08/online-shopping-guide.jpg" />

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

        <h1>{items.category}</h1>

        <Row>
          <Col sm={3}>
            <label for="customRange3" class="form-label">
              Price range
            </label>
            <div className="slider-parent">
              <input
                type="range"
                min="1"
                max="1500"
                value={price}
                onChange={({ target: { value: radius } }) => {
                  setPrices(radius);
                }}
              />
              <div className="buble">${price}</div>
            </div>
          </Col>

          <Col sm={9}>
            <Row xs={1} md={2} className="g-4" style={{ columnGap: "30px" }}>
              {filteredProduct.map((item, index) => {
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
            disabled={offset >= filteredProduct.length - 5}
          >
            Next
          </Button>
        </div>
      </Container>
    </div>
  );
}
