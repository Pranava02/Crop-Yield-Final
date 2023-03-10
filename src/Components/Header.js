import React from 'react'
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { BrowserRouter as Router, Route, Link,Routes } from "react-router-dom";
import { Image } from '@chakra-ui/react'

export default function() {

  const navigate=useNavigate()

  function goToPrediction()
  {navigate("/prediction")}
  
  function goToYield()
  {navigate("/yield")}
  
  function goToAbout()
  {navigate("/")}
  return (
    <Navbar fixed="top" bg="light" expand="lg">
    <Container>
    <Image
            borderRadius='10%'
            boxSize='50px'
            src={require("../Images/img4.png")}
            alt='Dan Abramov'
          />&nbsp;&nbsp;
      <Navbar.Brand style={{fontSize:30,fontWeight:'bold'}} href="#home">SAPLING</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          
          
        </Nav>
        <Button onClick={goToAbout} variant="primary">Home</Button>{" "}&nbsp;
        <Button onClick={goToPrediction} variant="success">Crop prediction  </Button>{" "}&nbsp;
        <Button onClick={goToYield} variant="success">Yield Prediction</Button>{" "}&nbsp;
        
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}
