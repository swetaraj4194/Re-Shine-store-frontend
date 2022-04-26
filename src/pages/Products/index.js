import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BsSearch } from "react-icons/bs";

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
  Carousel,
} from "react-bootstrap";

import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";

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
      <Carousel>
        <Carousel.Item>
          <img
            className="w-100"
            src="https://cdn.pixabay.com/photo/2016/05/27/08/51/mobile-phone-1419275__340.jpg"
            alt="details.title"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="w-100"
            src="https://cdn.pixabay.com/photo/2015/12/06/09/15/maple-1079235__340.jpg"
            alt="details.title"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="w-100"
            src="https://cdn.pixabay.com/photo/2016/09/22/10/44/banner-1686943__340.jpg"
            alt="details.title"
          />
        </Carousel.Item>
      </Carousel>

      <Container className="p-4">
        <div className=" w-100 m-5" style={{ textAlign: "center" }}>
          <input
            type="search"
            className="icon"
            placeholder="Search"
            aria-label="Search"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />
        </div>

        <Row>
          <Col sm={3}>
            <div>
              <Card.Title className="text-muted mb-3">
                Filter By Price
              </Card.Title>
              <div>
                <div className="mb-2">
                  <Button
                    className="web-color1"
                    value={200}
                    onClick={(e) => {
                      checkAndSetPrices(e.target.value);
                    }}
                  >
                    0 - €200
                  </Button>
                </div>

                <div className="mb-2">
                  <Button
                    className="web-color1"
                    value={400}
                    onClick={(e) => {
                      checkAndSetPrices(e.target.value);
                    }}
                  >
                    €200 - €400
                  </Button>
                </div>

                <div className="mb-2">
                  <Button
                    className="web-color1"
                    value={600}
                    onClick={(e) => {
                      checkAndSetPrices(e.target.value);
                    }}
                  >
                    €400 - €600
                  </Button>
                </div>
                <div className="mb-2">
                  <Button
                    className="web-color1"
                    value={800}
                    onClick={(e) => {
                      checkAndSetPrices(e.target.value);
                    }}
                  >
                    €600 - €800
                  </Button>
                </div>
                <div className="mb-2">
                  <Button
                    className="web-color1"
                    value={1000}
                    onClick={(e) => {
                      checkAndSetPrices(e.target.value);
                    }}
                  >
                    {" "}
                    €800+
                  </Button>
                </div>
              </div>
            </div>
          </Col>

          <Col sm={9}>
            <Row xs={1} md={2} className="" style={{columnGap: "15px", rowGap: "15px"}}>
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
            <div className="mt-4 d-flex">
              <Button
                className="m-2 web-color"
                onClick={getPreviousProducts}
                disabled={offset === 0}
              >
                Previous
              </Button>
              <Button
                className="m-2 web-color"
                onClick={getNextProducts}
                disabled={offset >= filterProduct.length - 5}
              >
                Next
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
