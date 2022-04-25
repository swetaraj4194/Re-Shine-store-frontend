import React, { useState } from "react";
import { Button, Card, Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import Loading from "../../components/Loading";
import { selectUser } from "../../store/user/selectors";
import EditProfile from "./EditProfile";

export default function MyProfile() {
  
  const [editMode, setEditMode] = useState(false);

  const user = useSelector(selectUser);

  if (user === null) {
    return <Loading />;
  }
  return (
    <Container>
      <Card bg="light" style={{ width: "18rem" }}>
        <Card.Header>My Profile</Card.Header>
        <Card.Body>
          <Card.Title>Name: {user.name}</Card.Title>
          <Card.Text>Email: {user.email}</Card.Text>
          <Card.Text>Phone NO. :{user.phone}</Card.Text>
          <Card>
            <Button onClick={() => setEditMode(!editMode)}>
              {editMode ? "Close" : "Edit Profile"}
            </Button>
          </Card>

          {editMode && (
            <Card>
              <EditProfile />
            </Card>
          )}
        </Card.Body>
      </Card>
    </Container>
  );
}
