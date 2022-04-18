import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { NavLink } from "react-router-dom";
import { fetchProducts } from "../../store/products/actions";
import { selectProducts } from "../../store/products/selectors";
import {  Container, Card } from "react-bootstrap";


export default function Products() {
  const dispatch = useDispatch();
  const items = useSelector(selectProducts);
  // console.log("product",items)

 

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <Container>
      <h1>Products</h1>

      {items.map((item) => {
        return (
          <Card key={item.id}>
           
            <h2>{item.title}</h2>
            <p>{item.price}</p>
            <p>{item.ratings}</p>
            
         

            {/* <div>
              <NavLink to={`spaces/${space.id}`}>
                <div className="navbar">
                  <Button className="navBtn">
                    <span className="nav">Visit to story Page</span>
                  </Button>
                </div>
              </NavLink>{" "}
            </div> */}
          </Card>
        );
      })}
    </Container>
  );
}



















// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// // import { NavLink } from "react-router-dom";
// import { fetchProducts } from "../../store/products/actions";
// import { selectProducts } from "../../store/products/selectors";
// import { Container, Card } from "react-bootstrap";
// // import Space from "../../components/Space";

// export default function Products() {
//   const dispatch = useDispatch();
//   const items = useSelector(selectProducts);
//   console.log("product", items);

//   // useEffect(() => {
//   //   if (spaces.length === 0) {
//   //     dispatch(fetchProducts());
//   //   }

//   // }, [dispatch]);

//   useEffect(() => {
//     dispatch(fetchProducts());
//   }, [dispatch]);

//   return (
//     <Container>
//       <h1>Products</h1>

      
//     </Container>
//   );
// }