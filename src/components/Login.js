import React, { Fragment } from "react";

const Login = ({ setIsLoggedIn }) => {
  return (
    <div>
      <form onSubmit={() => setIsLoggedIn(true)}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" />
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
