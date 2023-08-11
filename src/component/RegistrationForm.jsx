// Register Form
// import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";


function RegistrationForm() {
  // const [name, setName] = useState("");
  return (
    <div className="container Registration border border-success-subtle ">
      <h1>Registration Form</h1>
      <form>
        <Form>
          {/* Email */}
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" autoComplete="true" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          {/* username */}
          <Form.Group className="mb-3" controlId="formBasicUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control type="username" placeholder="Enter username" autoComplete="true"  />
          </Form.Group>

          {/* Password */}
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" autoComplete="true" />
          </Form.Group>

          {/* checkbox */}
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          {/* buttom */}
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </form>
    </div>
  );
}

export default RegistrationForm;
