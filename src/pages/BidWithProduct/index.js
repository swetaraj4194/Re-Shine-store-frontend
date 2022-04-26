// import React, { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { Link, useParams } from "react-router-dom";

// import { Container, Card, Button } from "react-bootstrap";

// import Loading from "../../components/Loading";
// // import { fetchBidWithProductById } from "../../store/products/actions";
// import { bidDetails } from "../../store/products/selectors";
// import RatingCard from "../Details/RatingCard";

// export default function BidWithProduct() {
//   const { id } = useParams();
//   const details = useSelector(bidDetails);

//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(fetchBidWithProductById(id));
//   }, [dispatch]);

//   console.log("biddetails", details);
//   return (
//     <Container>
//       <h1> Bid Details with product</h1>
//       <Card.Title>Bid Amount: ${details?.bid?.amount}</Card.Title>

//       <Card style={{ width: "18rem" }}>
//         <Card.Img variant="top" src={details?.bid?.product.mainImage} />
//         <Card.Body>
//           <Card.Text>{details?.bid?.product.title}</Card.Text>
//           <Card.Text>${details?.bid?.product.price}</Card.Text>
//           <Card.Text>
//             <RatingCard rating={details?.bid?.product.ratings}></RatingCard>
//           </Card.Text>{" "}
//           <Link to={`/myProducts`}>
//             <Button variant="primary">My Items</Button>
//           </Link>
//         </Card.Body>
//       </Card>
//     </Container>
//   );
// }

import React, { useEffect } from "react";
import ReactStars from "react-rating-stars-component";
import {
  Button,
  Card,
  CardGroup,
  CardImg,
  Carousel,
  Container,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import Loading from "../../components/Loading";

import {
  selectUser,
  selectMyBid,
  selectToken,
} from "../../store/user/selectors";

export default function MyProduct() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector(selectUser);
  const bids = useSelector(selectMyBid);
  const token = useSelector(selectToken);

  useEffect(() => {
    if (!token) navigate("/login");
  }, [token]);

  if (bids === null) {
    return <Loading />;
  }

  return (
    <Container className="p-5">
      {bids?.map((bid) => {
        return (
          <div
            class="mb-3 p-2"
            style={{ maxwidth: "200px" }}
          >
            <div class="p-5 row g-0">
              <div class="col-md-4">
                <img
                  src={bid.product.mainImage}
                  class="img-fluid rounded-start"
                  alt={bid.product.id}
                />  
              </div>
              <div class="col-md-4">
                <div class="card-body">
                  <h5 class="card-title">Bid Amount: €{bid.amount}</h5>
                  <p class="card-text">{bid.product.title}</p>
                  <p class="card-text">€{bid.product.price}</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </Container>
  );
}

// <Container style={{ width: "18rem" }}>
//   <Card.Title>My Bids</Card.Title>

//   <Card.Title>{user.name}</Card.Title>

//     <Card className="p-5">
//       <Card.Text>
//         {bids.map((bid) => {
//           return (
//             <card key={bid.id}>
//               BidAmount: <Card.Title>€{bid.amount}</Card.Title>
//               <Card.Title className="h6 p-2 m-0 text-lowercase">
//                 {bid.product.title}
//               </Card.Title>
//               <img
//                 className="w-100"
//                 src={bid.product.mainImage}
//                 alt={bid.product.id}
//               />
//               <Card.Text>€{bid.product.price}</Card.Text>
//               <hr />
//             </card>
//           );
//         })}
//       </Card.Text>
//     </Card>

//   <Link to={`/myProducts`}>
//     <Button variant="primary">myItem</Button>
//   </Link>
// </Container>
