import React, { useState } from "react";
import { Meteor } from "meteor/meteor";
import { LoginWithGithub } from "./LoginWithGithub";

export const LoginForm = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const onLoginClick = (event) => {
    event.preventDefault();

    Meteor.loginWithPassword(userName, password);
  };

  return (
    <form onSubmit={onLoginClick} className="login-form">
      <LoginWithGithub />
      <label htmlFor="username">Username</label>
      <input
        type="text"
        placeholder="Username"
        name="username"
        required
        onChange={(e) => setUserName(e.target.value)}
      />

      <label htmlFor="password">Password</label>
      <input
        type="password"
        placeholder="Password"
        name="password"
        required
        onChange={(e) => setPassword(e.target.value)}
      />

      <button type="submit">Log In</button>
    </form>
  );
};
