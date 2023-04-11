import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Form } from "react-bootstrap";
import { useState } from "react";

const AddCar = ({ addCar, show, handleClose }) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState();

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Car</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control
            onChange={({ target: { value } }) => setName(value)}
            type="text"
            placeholder="Car name"
          />
          <br />
          <Form.Control
            onChange={({ target: { value } }) => setNumber(value)}
            type="number"
            placeholder="Car number"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              if ((name, number)) {
                addCar(name, number);
                handleClose();
              }
            }}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddCar;
