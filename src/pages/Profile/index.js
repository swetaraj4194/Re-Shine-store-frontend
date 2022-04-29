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
    <Container className="p-5">
      <div className="col-6 justify-content-center">
        <h1 className="text-muted p-2">My Profile</h1>
        <Card.Body>
          <Card.Title>Name: {user.name}</Card.Title>
          <Card.Title>Email: {user.email}</Card.Title>
          <Card.Title className="mb-4">Phone No. :{user.phone}</Card.Title>
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
      </div>
    </Container>
  );
}
