import React from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

function Signup(props) {
  return (
    <>
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        id="signup-modal"
        centered>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title">Sign Up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicSignupEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicSignupPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicRemember">
              <Form.Check type="checkbox" label="Remember Password" />
            </Form.Group>
            <button className="btn btn-dark px-5" type="submit">
              Sign Up
            </button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Signup;
