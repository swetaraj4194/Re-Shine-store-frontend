import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import "./details.css";
import {  Container } from "react-bootstrap";

import Loading from "../../components/Loading";
import { fetchSpaceById } from "../../store/spaces/actions";
import { selectSpaceDetails } from "../../store/spaces/selectors";

export default function SpaceDetails() {
  const { id } = useParams();
  const space = useSelector(selectSpaceDetails);
  // const spaces=useSelector(selectSpaces);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSpaceById(id));
  }, [dispatch]);

  // console.log("id", space);

  if (!space || parseInt(space.id) !== parseInt(id)) return <Loading />;

  return (
    <Container>
      <h1>Stories</h1>
      <h3>{space.title}</h3>
      <p>{space.description}</p>
      {space.stories.map((story) => {
        return (
          <div key={story.id}>
            {/* {story.id} */}
            <h3>{story.name}</h3>
            <p>{story.content}</p>
            <img className="image" alt={story.id} src={story.imageUrl} />
          </div>
        );
      })}
    </Container>
  );
}
