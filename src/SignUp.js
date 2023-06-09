import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { REGISTER_ENDPOINT } from "./config";
import { Alert } from "@mui/material";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [hasAgreed, setHasAgreed] = useState(false);
  const [err, setErr] = useState("");
  const [succ, setSucc] = useState("");

  const handleChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    } else if (name === "name") {
      setName(value);
    } else if (name === "hasAgreed") {
      setHasAgreed(value);
    }
  };

  useEffect(() => {
    if (err) {
      setTimeout(() => {
        setErr("");
      }, 3000);
    }
  }, [err]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log({ email, password, name, hasAgreed });
    const res = await fetch(REGISTER_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({ email, password, name, hasAgreed }),
    });
    if (!res.ok) {
      setErr("Invalid Credentials or User does not exist");
    } else {
      setSucc("User created successfully");
    }
  };

  return (
    <div className="formCenter">
      <form onSubmit={handleSubmit} className="formFields">
        <div className="formField">
          <label className="formFieldLabel" htmlFor="name">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            className="formFieldInput"
            placeholder="Enter your full name"
            name="name"
            value={name}
            onChange={handleChange}
          />
        </div>
        <div className="formField">
          <label className="formFieldLabel" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="formFieldInput"
            placeholder="Enter your password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </div>
        <div className="formField">
          <label className="formFieldLabel" htmlFor="email">
            E-Mail Address
          </label>
          <input
            type="email"
            id="email"
            className="formFieldInput"
            placeholder="Enter your email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </div>

        <div className="formField">
          <label className="formFieldCheckboxLabel">
            <input
              className="formFieldCheckbox"
              type="checkbox"
              name="hasAgreed"
              checked={hasAgreed}
              onChange={handleChange}
            />{" "}
            I agree all statements in{" "}
            <a href="null" className="formFieldTermsLink">
              terms of service
            </a>
          </label>
        </div>
        {err && <Alert severity="error">{err}</Alert>}
        {succ && <Alert severity="success">{succ}</Alert>}
        <div className="formField">
          <button className="formFieldButton">Sign Up</button>{" "}
          <Link to="/sign-in" className="formFieldLink">
            I'm already a member
          </Link>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
