import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { fetchSpaces } from "../../store/spaces/actions";
import { selectSpaces } from "../../store/spaces/selectors";
import { Button, Container,Card } from "react-bootstrap";
// import Space from "../../components/Space";

export default function Spaces() {
  const dispatch = useDispatch();
  const spaces = useSelector(selectSpaces);

  useEffect(() => {
    if (spaces.length === 0) {
      dispatch(fetchSpaces());
    }
    
  }, [dispatch]);

  return (
    <Container>
      <h1>Spaces</h1>

      {spaces.map((space) => {
        return (
          <Card key={space.id}>
            {/* {space.id} */}
            <h2>{space.title}</h2>
            <p>{space.description}</p>
            <p>{space.backgroundColor}</p>
            <p>{space.color}</p>
            {/* showLink={true} */}

            <div>
              <NavLink to={`spaces/${space.id}`}>
                <div className="navbar">
                  <Button className="navBtn">
                    <span className="nav">Visit to story Page</span>
                  </Button>
                </div>
              </NavLink>{" "}
            </div>
          </Card>
        );
      })}
    </Container>
  );
}

// import React from "react";
// import { NavLink } from "react-router-dom";
// export default function Space() {
//   return (
//     <div>
//       <h1>spaces</h1>
//       <div>
//         <label>Title:</label>
//         <br />

//         <input type="text"></input>
//       </div>
//       <br />
//       <div>
//         <label>Description:</label>
//         <br />

//         <input type="text"></input>
//       </div>
//       <br />
//       <div>
//         <label>Background Color:</label>
//         <br />

//         <input type="text"></input>
//       </div>
//       <br />
//       <div>
//         <label>Color:</label>
//         <br />

//         <input type="text"></input>
//       </div>
//       <NavLink to={`/other`}>
//         <div className="navbar">
//           <button className="navBtn">
//             <span className="nav">Visit Space</span>
//           </button>
//         </div>
//       </NavLink>{" "}
//     </div>
//   );
// }
