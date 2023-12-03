import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { fetchNewUser } from "../../store/signup/signup.reducer";

function Signup(props) {
  const [signupDetails, setSignUpDetails] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });
  const dispatch = useDispatch();

  function areAllValuesTruthy(obj) {
    for (var key in obj) {
      if (!obj[key]) {
        return false;
      }
    }
    return true;
  }

  const handleClick = () => {
    dispatch(
      fetchNewUser({
        name: signupDetails.name,
        email: signupDetails.email,
        password: signupDetails.password,
        passwordConfirm: signupDetails.passwordConfirm,
      })
    );
    if (areAllValuesTruthy(signupDetails)) {
      props.onHide(true);
    }
  };

  const handleChange = (name, val) => {
    setSignUpDetails({ ...signupDetails, [name]: val });
  };

  return (
    <>
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        id="signup-modal"
        centered>
        <Modal.Header
          closeButton
          style={{ backgroundColor: "#faaa19", color: "#fff" }}>
          <Modal.Title id="contained-modal-title">Sign Up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={(e) => e.preventDefault()}>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                onChange={(e) => handleChange("name", e.target.value)}
                type="text"
                placeholder="Enter name"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicSignupEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                onChange={(e) => handleChange("email", e.target.value)}
                type="email"
                placeholder="Enter email"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicSignupPassword">
              <Form.Label>
                Password{" "}
                <span style={{ fontSize: "10px" }}>
                  (length should be of min. 8 digit)
                </span>
              </Form.Label>
              <Form.Control
                onChange={(e) => handleChange("password", e.target.value)}
                type="password"
                placeholder="Password"
                required
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="formBasicSignupConfirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                onChange={(e) =>
                  handleChange("passwordConfirm", e.target.value)
                }
                type="password"
                placeholder="Confirm Password"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicRemember">
              <Form.Check type="checkbox" label="Remember Password" />
            </Form.Group>
            <button className="btn btn-dark px-5" onClick={handleClick}>
              Sign Up
            </button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Signup;
