import React, { useEffect } from "react";
import ReactStars from "react-rating-stars-component";
import { Button, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import Loading from "../../components/Loading";

import {
  selectMyBid,
  selectToken,
} from "../../store/user/selectors";
import { deleteBid } from "../../store/user/actions";

export default function MyProduct() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  
  const bids = useSelector(selectMyBid);
  const token = useSelector(selectToken);

  useEffect(() => {
    if (!token) navigate("/login");
  }, [token]);

  const onDelete = (id) => {
    dispatch(deleteBid(id));
  };

  if (bids === null) {
    return <Loading />;
  }

  return (
    <Container className="p-5">
      {bids.length === 0 ? (
        <h3> No Bid found yet!!</h3>
      ) : (
        bids?.map((bid) => {
          return (
            <div class="mb-3 p-2" style={{ maxwidth: "200px" }}>
              <div class="p-5 row g-0">
                <div class="col-md-4">
                  <img
                    src={bid?.product?.mainImage}
                    class="img-fluid rounded-start"
                    alt={bid?.product?.id}
                  />
                </div>
                <div class="col-md-4">
                  <div class="card-body">
                    <h5 class="card-title">Bid Amount: €{bid.amount}</h5>
                    <p class="card-text">{bid?.product?.title}</p>
                    <p class="card-text">€{bid?.product?.price}</p>
                    <Button variant="danger" onClick={() => onDelete(bid.id)}>
                      Delete
                    </Button>
                    <Link to={`/${bid.id}`}>
                      <Button variant="primary">Details</Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })
      )}

      <Link to={`/myProducts`}>
        <Button style={{ marginLeft: "600px" }} variant="primary">
          My Items
        </Button>
      </Link>
    </Container>
  );
}
