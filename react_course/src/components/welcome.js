import React, { useState, useEffect } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import classes from "./welcome.module.css";
import { useNavigate } from "react-router";

export default function Welcome() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.value);
  };
  const handlePassChange = (e) => {
    setPassword(e.value);
  };
  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        console.log(user.email, user.password);
        navigate("/Home");
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <div className={classes.maincontent}>
      <h1>todo list</h1>
      <form method="POST">
        <div className={classes.userbox}>
          <input
            type="email"
            name="email"
            required=""
            id="email"
            onChange={handleEmailChange}
            value={email}
          />
          <label htmlFor="email">email</label>
        </div>
        <div className={classes.userbox}>
          <input
            type="password"
            name="pass"
            required=""
            id="pass"
            onChange={handlePassChange}
            value={password}
          />
          <label htmlFor="pass">password</label>
        </div>
        <a href="" onClick={handleSignIn}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          sign in
        </a>
        <a href="">create an account</a>
      </form>
    </div>
  );
}
