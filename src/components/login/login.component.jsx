import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./login.component.css";
import Signup from "../signUp/signup.component";

function Login(props) {
  const [signupModalShow, setSignupModalShow] = useState(false);

  const closeModal = () => {
    setSignupModalShow(true);
    props.onHide(false);
  };

  return (
    <>
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        id="login-modal"
        centered>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title">Log In</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicLoginEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicLoginPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" required />
            </Form.Group>
            <button className="btn btn-dark px-5" type="submit">
              Sign In
            </button>
          </Form>
          <Container>
            <Row>
              <Col md={6} className="py-3 px-0 googleButton">
                <button className="btn btn-secondary btn-block loginButton">
                  <i className="fa fa-google"></i>Sign in with Google
                </button>
              </Col>
              <Col md={6} className="py-3 px-0">
                <div
                  className="btn btn-warning btn-block px-5 signUpButton"
                  onClick={closeModal}>
                  <i className="fa fa-user"></i> Sign Up
                </div>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
      </Modal>
      <Signup show={signupModalShow} onHide={() => setSignupModalShow(false)} />
    </>
  );
}

export default Login;
