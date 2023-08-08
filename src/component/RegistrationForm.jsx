// Register Form
import React, { useState } from "react";
// import "../static/css/Forms.css";
import { countries } from "../data/countries";
// import { topNatureCountries } from "../data/topNatureCountries";

function RegistrationForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [country, setCountry] = useState("")
  // const [natureCountry, setNatureCountry] = useState("")
  // const [isSubmitted, setIsSubmitted] = useState(false)

  return (
    <form>
      <label>
        Enter your name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>

      <label>
        Enter your name:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label>
        Enter your name:
        <input
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>

      <button type="submit"> SUBMIT </button>
    </form>
  );
}

export default RegistrationForm;
