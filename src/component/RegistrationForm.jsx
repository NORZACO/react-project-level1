// Register Form
// import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../static/css/RegistrationForm.css";
import { useState, useEffect } from "react";

function RegistrationForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [passord, setPassord] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isChecked, setCheck] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (
      username === "" ||
      email === "" ||
      passord === "" ||
      firstName === "" ||
      lastName === ""
    ) {
      alert("Please fill all the fields");
      return;
    }
    console.log("name", username);
    console.log("email", email);
    console.log("Password", passord);
    console.log("Checkbox", isChecked);

    // post
    const rawData = JSON.stringify({
      firstName,
      lastName,
      username,
      email,
      password: passord,
    });

    fetch("http://127.0.0.1:8000/api/v1/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: rawData,
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response data
      })
      .catch((error) => {
        // Handle any errors
      });

    // rese
      setUsername("");
      setEmail("");
      setFirstName("");
      setLastName("");
      setPassord("");
      setCheck(false);
  }

  useEffect(()=>{
    console.log("useEffect")
  },[passord])



  return(
    <>
    <div className="container Registration ">
      <h1 className="" style={{ textAlign: "center", fontSize: "2rem" }}
      >
        Registration Form </h1>
      <form className="form-signin w-10 m-auto border border-secondary">
        <Form>
          {/* Email */}
          <Form.Group className={"mb-3"} controlId={"formBasicEmail"}>
            <Form.Label>Email address</Form.Label>
            <Form.Control
              onChange={(e) => {
                // log
                console.log("e.target.value", e.target.value);
                return setEmail(e.target.value);
              }}
              value={email}
              type="email"
              placeholder="Enter email"
              autoComplete={"true"}
            />

            {/* helps text */}
            <Form.Text className={"text-muted"}>
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          {/* username */}
          <Form.Group className={"mb-3"} controlId={"formBasicUsername"}>
            <Form.Label>Username</Form.Label>
            <Form.Control
              onChange={(e) => {
                // log
                console.log("Username: ", e.target.value);
                return setUsername(e.target.value);
              }}
              value={username}
              type={"text"}
              placeholder={"Enter username"}
              autoComplete={"true"}
            />
          </Form.Group>

          {/* First Name */}
          <Form.Group className={"mb-3"} controlId={"formBasicFirstName"}>
            <Form.Label>First Name</Form.Label>
            <Form.Control
              onChange={(e) => {
                // log
                console.log("First Name: ", e.target.value);
                return setFirstName(e.target.value);
              }}
              value={firstName}
              type={"text"}
              placeholder={"Enter First Name"}
              autoComplete={"true"}
            />
          </Form.Group>

          {/* Last name*/}
          <Form.Group className={"mb-3"} controlId={"formBasicLastName"}>
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              onChange={(e) => {
                // log
                console.log("Last Name: ", e.target.value);
                return setLastName(e.target.value);
              }}
              value={lastName}
              type={"text"}
              placeholder={"Enter Last Name"}
              autoComplete={"true"}
            />
          </Form.Group>

          {/* Password */}
          <Form.Group className={"mb-3"} controlId={"formBasicPassword"}>
            <Form.Label>Password</Form.Label>
            <Form.Control
              onChange={(e) => {
                // log
                console.log("Password: ", e.target.value);
                return setPassord(e.target.value);
              }}
              value={passord}
              type={"password"}
              placeholder={"Password"}
              autoComplete={"true"}
            />
          </Form.Group>

          {/* checkbox */}
          <Form.Group
            className={"mb-3 d-flex justify-content-center"}
            controlId={"formBasicCheckbox"}
          >
            <Form.Check
              onChange={(e) => {
                // log
                console.log("Checkbox: ", e.target.checked);
                setCheck(e.target.checked);
              }}
              value={isChecked}
              checked={isChecked} // Assuming getCheck is a boolean state variable
              type="checkbox"
              label={isChecked ? "Checked" : "Label me out"} // Replace isChecked with the condition you want
            />
          </Form.Group>

          {/* buttom */}
          <Button
            className={"mb-3 btn btn-primary w-100"}
            variant={"primary"}
            type={"submit"}
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </Form>
      </form>
    </div>
    {/* </div> */}
    {/* <div class="b-example-divider"></div> */}
    </>
  );
}

export default RegistrationForm;
