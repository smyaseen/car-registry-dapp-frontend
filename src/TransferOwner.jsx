import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Form } from "react-bootstrap";

const TransferOwner = ({ show, handleClose, transferOwner }) => {
  const [transferTo, setTransferTo] = useState(null);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Transfer Car Ownership</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control
            onChange={({ target: { value } }) => setTransferTo(value)}
            type="text"
            placeholder="Transfer To"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              if (transferTo) {
                transferOwner(transferTo);
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

export default TransferOwner;
