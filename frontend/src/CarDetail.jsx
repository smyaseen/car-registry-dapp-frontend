import { Table, Button } from "react-bootstrap";
import React, { useState } from "react";
import TransferOwner from "./TransferOwner";

function CarDetail({ searchedCar, transferOwner }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  if (!searchedCar.owner) return <></>;
  else
    return (
      <>
        <TransferOwner
          show={show}
          handleClose={handleClose}
          handleShow={handleShow}
          transferOwner={(transferTo) => {
            transferOwner(transferTo, searchedCar.number);
          }}
        />
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Owner</th>
              <th>Car Name</th>
              <th>Car Number</th>
              <th>Transfer Ownership</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{searchedCar.owner}</td>
              <td>{searchedCar.name}</td>
              <td>{searchedCar.number}</td>
              <td>
                <Button onClick={handleShow} variant="primary">
                  Transfer
                </Button>
              </td>
            </tr>
          </tbody>
        </Table>
      </>
    );
}

export default CarDetail;
