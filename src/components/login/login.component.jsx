import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./login.component.css";
import Signup from "../signUp/signup.component";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser, user } from "../../store/login/login.reducer";

function Login(props) {
  const [signupModalShow, setSignupModalShow] = useState(false);
  const [loginDetails, setLoginDetails] = useState({
    username: "",
    password: "",
  });
  const dispatch = useDispatch();

  const userData = useSelector(user);
  useEffect(() => {
    console.log({ userData });
  }, [userData]);

  const closeModal = () => {
    setSignupModalShow(true);
    props.onHide(false);
  };

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
      fetchUser({
        username: loginDetails.username,
        password: loginDetails.password,
      })
    );
    if (areAllValuesTruthy(loginDetails) && userData?.isError === false) {
      props.onHide(false);
    }
  };

  const handleChange = (name, val) => {
    setLoginDetails({ ...loginDetails, [name]: val });
  };

  return (
    <>
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        id="login-modal"
        centered>
        <Modal.Header
          closeButton
          style={{ backgroundColor: "#faaa19", color: "#fff" }}>
          <Modal.Title id="contained-modal-title">Log In</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={(e) => e.preventDefault()}>
            {userData?.isError === true ? (
              <span style={{ fontSize: "12px", color: "red" }}>
                Please fill correct details
              </span>
            ) : (
              <span></span>
            )}
            <Form.Group className="mb-3" controlId="formBasicLoginEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                onChange={(e) => handleChange("username", e.target.value)}
                type="email"
                placeholder="Enter email"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicLoginPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                onChange={(e) => handleChange("password", e.target.value)}
                type="password"
                placeholder="Password"
                required
              />
            </Form.Group>
            <button className="btn btn-dark px-5" onClick={handleClick}>
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
                  className="btn btn-block px-5 signUpButton"
                  onClick={closeModal}
                  style={{ backgroundColor: "#faaa19" }}>
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
