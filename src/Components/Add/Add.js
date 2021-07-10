import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import "./../Add/Add.css";
const Add = ({ setMovies, Movies }) => {
  const [show, setShow] = useState(false);
  const [newTitle, setnewTitle] = useState("title");
  const [newDescription, setnewDescription] = useState("description");
  const newImage =
    "https://www.logolynx.com/images/logolynx/bc/bc54410df9671574aec037c71ed56c4b.jpeg";
  const [newRating, setnewRating] = useState("1");
  const handleAdd = (newmovies) => setMovies([...Movies, newmovies]);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add Movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Movie</Modal.Title>
        </Modal.Header>
        <Form.Control
          className="form"
          type="text"
          placeholder="Add movie Title"
          onChange={(e) => setnewTitle(e.target.value)}
        />
        <Form.Control
          className="form"
          type="text"
          placeholder="Add movie description"
          onChange={(e) => setnewDescription(e.target.value)}
        />

        <Form.Control
          className="form"
          type="number"
          placeholder="Add movie rating"
          onChange={(e) => setnewRating(e.target.value)}
          max="5"
          min="1"
        />
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              handleAdd({
                Id: Math.random(),
                Title: `${newTitle}`,
                Description: `${newDescription}`,
                PosterURL: `${newImage}`,
                Rating: `${newRating}`,
              });
              handleClose();
            }}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default Add;
