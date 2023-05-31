import React, { useState, useContext } from "react";
import { AuthContext } from "./contexts/AuthContext";

function Login() {
  const [form, setForm] = useState({
    username: "workintech",
    password: "wecandoit",
  });

  const { initAuth } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    initAuth(form);
  };

  const changeHandler = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <div className="loginFormMainDiv">
        <h1>LOGIN</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <h2>USERNAME</h2>
            <input
              name="username"
              onChange={changeHandler}
              value={form.username}
            ></input>
          </div>
          <div>
            <h2>PASSWORD</h2>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={changeHandler}
            ></input>
          </div>
          <button type="submit">SUBMIT</button>
        </form>
      </div>
    </div>
  );
}

export default Login;