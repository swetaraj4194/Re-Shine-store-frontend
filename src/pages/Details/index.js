// import React, { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { useParams } from "react-router-dom";
// // import "./details.css";
// import {
//   Container,
//   Card,
//   Row,
//   Col,
//   Button,
//   Navbar,
//   Nav,
// } from "react-bootstrap";
// import { BsFillCartFill } from "react-icons/bs";

// import Loading from "../../components/Loading";
// import { fetchProductsById } from "../../store/products/actions";
// import { selectProductDetails } from "../../store/products/selectors";

// import RatingCard from "./RatingCard";

// export default function SpaceDetails() {
//   const { id } = useParams();
//   const details = useSelector(selectProductDetails);

//   const dispatch = useDispatch();

//   //   console.log("details", details);

//   useEffect(() => {
//     dispatch(fetchProductsById(id));
//   }, [dispatch]);

//   if (!details || parseInt(details.id) !== parseInt(id)) return <Loading />;

//   return (
//     <Container>
//       <h1>Details</h1>

//       <Row>
//         <Col sm={7} style={{ width: "18rem" }}>
//           <Card.Img variant="top" src={details.mainImage} />

//           {details.images.map((item) => {
//             return <Card.Img src={item.image} />;
//           })}
//         </Col>

//         <Col sm={5}>
//           <Row xs={1} md={2} className="g-4" style={{ columnGap: "30px" }}>
//             <Card.Body>
//               <Card.Title>{details.title}</Card.Title>
//               <Card.Title>{details.description}</Card.Title>
//               <Card.Text>${details.price}</Card.Text>
//               <RatingCard rating={details.ratings}></RatingCard>
//             </Card.Body>

//             <Card>
//               {" "}
//               <Nav.Link style={{ fontSize: "30px", color: "#8b078b" }}>
//                 <BsFillCartFill />
//               </Nav.Link>
//               add to cart
//             </Card>

//             <Button>Buy</Button>
//           </Row>
//         </Col>
//       </Row>
//     </Container>
//   );
// }

import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
// import "./details.css";
import {
  Container,
  Card,
  Row,
  Col,
  Button,
  Navbar,
  Nav,
  Carousel,
} from "react-bootstrap";
import { BsFillCartFill } from "react-icons/bs";

import Loading from "../../components/Loading";
import { fetchProductsById } from "../../store/products/actions";
import { selectProductDetails } from "../../store/products/selectors";

import RatingCard from "./RatingCard";

export default function SpaceDetails() {
  const { id } = useParams();
  const details = useSelector(selectProductDetails);

  const dispatch = useDispatch();

  //   console.log("details", details);

  useEffect(() => {
    dispatch(fetchProductsById(id));
  }, [dispatch]);

  if (!details || parseInt(details.id) !== parseInt(id)) return <Loading />;

  return (
    <Container>
      <h1>Details</h1>

      <Row>
        <Col sm={8} style={{ width: "38rem" }} className="m-2">
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

        <Col sm={4}>
          <Row xs={1} md={2} className="g-4" style={{ columnGap: "30px" }}>
            <Card.Body>
              <Card.Title>{details.title}</Card.Title>
              <Card.Title>{details.description}</Card.Title>
              <Card.Text>${details.price}</Card.Text>
              <RatingCard rating={details.ratings}></RatingCard>
            </Card.Body>

            <Card>
              {" "}
              <Nav.Link style={{ fontSize: "30px", color: "#8b078b" }}>
                <BsFillCartFill />
              </Nav.Link>
              add to cart
            </Card>

            <Button>Buy</Button>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
