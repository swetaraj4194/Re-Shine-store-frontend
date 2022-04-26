import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { postProduct } from "../../store/user/actions";
import { selectToken } from "../../store/user/selectors";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { Card, Col } from "react-bootstrap";
import axios from "axios";

export default function SellerForm() {
  const navigate = useNavigate();

  const [title, setTitle] = useState("title");
  const [categoryId, setCategoryId] = useState(8);
  const [mainImage, setMainImage] = useState("");
  // const [images, setImage] = useState({
  //   image1: "",
  //   image2: "",
  //   image3: "",
  // });

  const [images, setImage] = useState([]);

  const [amount, setAmount] = useState(0);
  const [description, setDescription] = useState("Description");
  const [price, setPrice] = useState(10);

  const token = useSelector(selectToken);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!token) navigate("/login");
  }, [token]);

  function submitForm(event) {
    event.preventDefault();

    dispatch(
      postProduct(
        title,
        description,
        price,
        mainImage,
        categoryId,
        amount,
        // Object.values(images)
        images
      )
    );

    setCategoryId(" ");
    setTitle("");
    setMainImage(" ");
    setImage("");

    setDescription("");
    setPrice("");
  }

  const uploadMainImage = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "xevkbl7f");
    // console.log("main",files)

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/daokf4bsg/image/upload",
      {
        method: "POST",
        body: data,
      }
    );
    const file = await res.json();
    console.log(file);
    setMainImage(file.url);
  };

  const uploadImage = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "xevkbl7f");
    // console.log("main",files)

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/daokf4bsg/image/upload",
      {
        method: "POST",
        body: data,
      }
    );
    const file = await res.json();
    console.log(file);
    setImage(file.url);
  };

  return (
    <Container className="p-4 ">
      <Form as={Col} md={{ span: 6, offset: 3 }} className="mt-5">
        <h1 className="mt-5 mb-5">Post Items</h1>
        <Form.Group controlId="formBasicName">
          <Form.Label>Title</Form.Label>

          <Form.Control
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            type="text"
            placeholder="Enter name"
            required
          />
        </Form.Group>

        <Form.Group controlId="formBasicText">
          <Form.Label>Description</Form.Label>
          <Form.Control
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            type="text"
            placeholder="Write description"
            required
          />
        </Form.Group>

        <Form.Group controlId="formBasicText">
          <Form.Label>Price</Form.Label>
          <Form.Control
            value={price}
            onChange={(event) => setPrice(event.target.value)}
            type="number"
            placeholder="Write price"
            required
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Main Image</Form.Label>
          <Form.Control
            onChange={uploadMainImage}
            type="file"
            placeholder="url"
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Image</Form.Label>
          <Form.Control
            onChange={uploadImage}
            type="file"
            placeholder="url"
            multiple
          />
        </Form.Group>

        <Form.Group controlId="formBasicText">
          <label>
            Select category:
            <select
              value={categoryId}
              onChange={(event) => setCategoryId(event.target.value)}
            >
              <option value="1">Electronics</option>
              <option value="2">Jewelery</option>
              <option value="3">Men's Clothing</option>
              <option value="4">Women's Clothing</option>
              <option value="5">Furniture</option>
              <option value="6">Home Decoration</option>
              <option value="7">Plants</option>
              <option value="8">Other</option>
            </select>
          </label>
        </Form.Group>

        <Form.Group controlId="formBasicText">
          <Form.Label>Minimum Bid</Form.Label>
          <Form.Control
            value={amount}
            onChange={(event) => setAmount(parseInt(event.target.value))}
            type="Number"
            placeholder="Minimum bid"
            required
          />
        </Form.Group>
        {/* 
        <Form.Group>
          <Form.Label>Image 1</Form.Label>
          <Form.Control
            value={images.image1}
            onChange={(event) =>
              setImage({
                ...images,
                image1: event.target.value,
              })
            }
            type="text"
            placeholder="url"
          />
          <Form.Label>Image 2</Form.Label>
          <Form.Control
            value={images.image2}
            onChange={(event) =>
              setImage({
                ...images,
                image2: event.target.value,
              })
            }
            type="text"
            placeholder="url"
          />
          <Form.Label>Image 3</Form.Label>
          <Form.Control
            value={images.image3}
            onChange={(event) =>
              setImage({
                ...images,
                image3: event.target.value,
              })
            }
            type="text"
            placeholder="url"
          />
          <Form.Text className="text-muted">
            you can see the post on MyItem Page
          </Form.Text>
        </Form.Group> */}

        <Form.Group className="mt-5">
          <Button variant="primary" type="submit" onClick={submitForm}>
            Post
          </Button>
        </Form.Group>
        <Link to="/myspace">Click here to go MyItem Page</Link>
      </Form>
    </Container>
  );
}
