import { useState } from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

const Auth = () => {
  const [curr, setCurr] = useState("signin");

  const handleSignInClick = () => {
    setCurr("signin");
  };

  const handleSignUpClick = () => {
    setCurr("signup");
  };

  return (
    <div className="App">
      <div className="appAside" />
      <div className="appForm">
        <div className="pageSwitcher">
          <div
            onClick={handleSignInClick} // Updated onClick event handler
            className={`pageSwitcherItem ${
              curr === "signin" ? "pageSwitcherItem-active" : ""
            }`}
          >
            Sign In
          </div>
          <div
            onClick={handleSignUpClick} // Updated onClick event handler
            className={`pageSwitcherItem ${
              curr === "signup" ? "pageSwitcherItem-active" : ""
            }`}
          >
            Sign Up
          </div>
        </div>

        <div className="formTitle">
          <div
            onClick={handleSignInClick} // Updated onClick event handler
            className={`formTitleLink ${
              curr === "signin" ? "formTitleLink-active" : ""
            }`}
          >
            Sign In
          </div>{" "}
          or{" "}
          <div
            onClick={handleSignUpClick} // Updated onClick event handler
            className={`formTitleLink ${
              curr === "signup" ? "formTitleLink-active" : ""
            }`}
          >
            Sign Up
          </div>
        </div>

        {curr === "signin" ? <SignIn /> : <SignUp />}
      </div>
    </div>
  );
};

export default Auth;
