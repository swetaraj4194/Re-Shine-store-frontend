import React, { useState } from "react";

import { Button, Card, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, NavLink } from "react-router-dom";
import Loading from "../../components/Loading";
import { deleteStory } from "../../store/user/actions";
import EditSpace from "./EditSpace";
import { selectUser, selectMySpace } from "../../store/user/selectors";

export default function MySpace() {
  const dispatch = useDispatch();
  // const { id } = useSelector(selectUser);
  const user = useSelector(selectUser);
  const space = useSelector(selectMySpace);
  const [editMode, setEditMode] = useState(false);

  // const displayButtons = user.id === space.userId;



  if (user.token === null) {
    Navigate("/");
  }

  if (space === null) {
    return <Loading />;
  }

  const onDelete = (id) => {
    // console.log("deleting story!", id);
    dispatch(deleteStory(id));
  };

  return (
    <Container>
      <h1>My Space</h1>
      <h4>Name:{user.name}</h4>
      <br />
      <h5>Title:{space.title}</h5>
      <p>Description:{space.description}</p>
      <p> BackgroundColor:{space.backgroundColor}</p>
      <p>color:{space.color}</p>
      {/* <Button>Edit</Button> */}
      <br />
      <br />

      {/* {displayButtons ? (
        <Card>
          <Button onClick={() => setEditMode(!editMode)}>
            {editMode ? "Close" : "Edit my space"}
          </Button>
        </Card>
      ) : null} */}

      <Card>
        <Button onClick={() => setEditMode(!editMode)}>
          {editMode ? "Close" : "Edit my space"}
        </Button>
      </Card>

      {editMode && (
        <Card>
          <EditSpace />
        </Card>
      )}

      <NavLink to={`spaces/${space.id}/stories`}>
        <Button>Post</Button>{" "}
      </NavLink>

      <hr></hr>
      <div key={space.id}>
        {space.stories.map((story) => {
          return (
            <div key={story.id}>
              <h1>{story.name}</h1>
              <p>{story.content}</p>
              <img className="image" alt={story.id} src={story.imageUrl} />
              <br />
              <br />{" "}
              <Button variant="danger" onClick={() => onDelete(story.id)}>
                Delete story
              </Button>
            </div>
          );
        })}
      </div>
      ))
    </Container>
  );
}
