import { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";

import "./styles/LoginAndSignup.css";

function LoginAndSignup() {
  const [selected, setSelected] = useState("Login");

  const [userNameLogin, setUserNameLogin] = useState();
  const [passwordLogin, setPasswordLogin] = useState();

  const [userNameSignup, setUserNameSignup] = useState();
  const [emailSignup, setEmailSignup] = useState();
  const [passwordSignup, setPasswordSignup] = useState();
  const [conPasswordSignup, setConPasswordSignup] = useState();

  const handleLogin = (event) => {
    event.preventDefault();
    fetch("http://localhost:8000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userNameLogin, passwordLogin }),
    }).catch((error) => {
      console.error("Error:", error);
    });
  };

  const handleSignup = (event) => {
    event.preventDefault();
    fetch("http://localhost:8000/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userNameSignup, emailSignup, passwordSignup }),
    }).catch((error) => {
      console.error("Error:", error);
    });
  };


  return (
    <div className="loginandsignup">
      {selected === "Login" ? (
        <div class="form">
          <h1>Login</h1>
          <form>
            <div class="field">
              <input
                type="text"
                placeholder="Username"
                class="input"
                value={userNameLogin}
                onChange={(e) => setUserNameLogin(e.target.value)}
                required
              />
            </div>
            <div class="field">
              <input
                type="password"
                placeholder="Password"
                class="password"
                value={passwordLogin}
                onChange={(e) => setPasswordLogin(e.target.value)}
                required
              />
            </div>
            {/* <div class="form-link">
              <a href="#" class="forgot-pass">
                Forgot password?
              </a>
            </div> */}
            <div class="field">
              <button onClick={handleLogin}>Login</button>
            </div>
          </form>
          <div class="form-link">
            <span>
              Don't have an account?{" "}
              <a class="link" onClick={() => setSelected("Signup")}>
                Signup
              </a>
            </span>
          </div>
        </div>
      ) : (
        <div class="form">
          <h1>Signup</h1>
          <form action="#">
            <div class="field">
              <input
                type="text"
                placeholder="Username"
                class="input"
                value={userNameSignup}
                onChange={(e) => setUserNameSignup(e.target.value)}
              />
            </div>
            <div class="field">
              <input
                type="email"
                placeholder="Email"
                class="input"
                value={emailSignup}
                onChange={(e) => setEmailSignup(e.target.value)}
              />
            </div>
            <div class="field">
              <input
                type="password"
                placeholder="Create password"
                class="password"
                value={passwordSignup}
                onChange={(e) => setPasswordSignup(e.target.value)}
              />
            </div>
            <div class="field">
              <input
                type="password"
                placeholder="Confirm password"
                class="password"
                value={conPasswordSignup}
                onChange={(e) => setConPasswordSignup(e.target.value)}
              />
            </div>
            <div class="field">
              <button onClick={handleSignup}>Signup</button>
            </div>
          </form>
          <div class="form-link">
            <span>
              Already have an account?{" "}
              <a class="link" onClick={() => setSelected("Login")}>
                Login
              </a>
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

export default LoginAndSignup;
