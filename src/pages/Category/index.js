import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Card, Row, Col, Button } from "react-bootstrap";
import "./style.css";
import { useParams } from "react-router-dom";
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from "react-icons/bs";
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
        <div className=" w-100 m-5" style={{ textAlign: "center" }}>
          <input
            type="search"
            placeholder="Search"
            className="icon"
            aria-label="Search"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />
        </div>

        <h1>{items.category}</h1>

        <Row>
          <Col sm={3}>
            <Card.Title className="text-muted mb-3">Filter By Price</Card.Title>
            <div className="slider-parent">
              <input
                type="range"
                min="0"
                max="1000"
                value={price}
                onChange={({ target: { value: radius } }) => {
                  setPrices(radius);
                }}
              />
              <div className="buble">€{price}</div>
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

            <div className="mt-4 d-flex">
              <Button
                className="m-2 web-color"
                onClick={getPreviousProducts}
                disabled={offset === 0}
              >
                <BsArrowLeftSquareFill />
              </Button>
              <Button
                className="m-2 web-color"
                onClick={getNextProducts}
                disabled={offset >= filteredProduct.length - 5}
              >
                <BsArrowRightSquareFill />
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
