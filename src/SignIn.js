import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LOGIN_ENDPOINT } from "./config";
import { useDispatch } from "react-redux";
import { setToken } from "./redux/user";
import { Alert } from "@mui/material";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const [err, setErr] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log({ email, password });
    const res = await fetch(LOGIN_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({ email, password }),
    });
    if (!res.ok) {
      setErr("Invalid Credentials or User does not exist");
    } else {
      dispatch(setToken(true));
      setTimeout(() => {
        navigate("/");
      });
    }
  };

  return (
    <div className="formCenter">
      <form className="formFields" onSubmit={handleSubmit}>
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
        {err && <Alert severity="error">{err}</Alert>}
        <div className="formField">
          <button className="formFieldButton">Sign In</button>{" "}
          <Link to="/" className="formFieldLink">
            Create an account
          </Link>
        </div>
      </form>
    </div>
  );
}

export default SignIn;
