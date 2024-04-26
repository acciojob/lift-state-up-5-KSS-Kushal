import React, { Fragment } from "react";

const Login = ({ isLoggedIn, setIsLoggedIn }) => {
  return (
    <div>
      {isLoggedIn?<p>You are Logged in!</p>:
      <Fragment>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" />
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <label htmlFor="password">Password</label>
          <input type="text" id="password" />
        </div>
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      </Fragment>}
    </div>
  );
};

export default Login;
