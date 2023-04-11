import "./App.css";
import React, { useState } from "react";
import { Container, Row, Col, Button, Alert } from "react-bootstrap";
import { Form } from "react-bootstrap";
import AddCar from "./AddCar";
import CarDetail from "./CarDetail";
import { ethers } from "ethers";
import { useEffect } from "react";
import ABI from "./ABI";

const isMetamaskAvailable = window.ethereum != undefined;
const provider = isMetamaskAvailable
  ? new ethers.providers.Web3Provider(window.ethereum)
  : null;

const signer = provider?.getSigner();
const contract = isMetamaskAvailable
  ? new ethers.Contract(
      "0x91A00EA7DdB746E5e2878CfE25e562F979454eD6",
      ABI,
      signer
    )
  : null;

const connectWallet = async (setConnectedAddress) => {
  const [connectedAddress] = await provider.send("eth_requestAccounts", []);
  setConnectedAddress(connectedAddress);
};

const getCarById = async (searchNo, setSearchedCar) => {
  if (!searchNo) return;
  try {
    const { owner, name, number } = await contract.getCarByCarNumber(searchNo);
    if (owner)
      setSearchedCar({
        owner,
        name,
        number: parseInt(number),
      });
  } catch (error) {
    console.error(error.message);
  }
};

const addCar = async (name, number) => {
  try {
    await contract.addCarByCarNumber(name, number);
  } catch (error) {
    // console.error(error.message);
  }
};

const transferOwner = async (transferTo, number) => {
  try {
    console.log(transferTo, number);
    await contract.transferOwner(transferTo, number);
  } catch (error) {
    // console.error(error.message);
  }
};

function App() {
  const [show, setShow] = useState(false);
  const [connectedAddress, setConnectedAddress] = useState(null);
  const [searchById, setSearchById] = useState(null);
  const [searchedCar, setSearchedCar] = useState({});

  useEffect(() => {
    (async () => {
      const [addr] = await provider?.listAccounts();
      setConnectedAddress(addr);
    })();
  }, []);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Container>
      <AddCar
        addCar={addCar}
        show={show}
        handleClose={handleClose}
        handleShow={handleShow}
      />
      {!isMetamaskAvailable && (
        <Alert variant="warning" show={!isMetamaskAvailable}>
          Install Metamask Wallet & Refresh Page!
        </Alert>
      )}
      {isMetamaskAvailable && !connectedAddress && (
        <Col className="mb-3">
          <Button
            variant="warning"
            onClick={() => connectWallet(setConnectedAddress)}
          >
            Connect Wallet
          </Button>
        </Col>
      )}
      {isMetamaskAvailable && connectedAddress && (
        <>
          <Row className="mb-3 d-flex justify-content-center">
            <Col>
              <Button onClick={handleShow} variant="primary">
                Add Car
              </Button>
            </Col>
            <Col>
              <Form.Control
                onChange={({ target: { value } }) => setSearchById(value)}
                type="number"
                placeholder="Search By Id"
              />
            </Col>
            <Col>
              <Button
                onClick={() => getCarById(searchById, setSearchedCar)}
                variant="primary"
              >
                Search
              </Button>
            </Col>
          </Row>
          <Row>
            <CarDetail
              transferOwner={transferOwner}
              searchedCar={searchedCar}
            />
          </Row>
        </>
      )}
    </Container>
  );
}

export default App;
