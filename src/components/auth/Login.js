import axios from "axios";
import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import "../../styles/Login.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { getLoggedIn } = useContext(AuthContext);
  const history = useHistory();

  async function login(e) {
    e.preventDefault();

    try {
      const loginData = {
        username,
        password,
      };

      await axios.post("http://localhost:5000/auth/login", loginData);

      await getLoggedIn();
      history.push("/feeling");
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div>
      <form onSubmit={login} class="login" >
       <h1>Log in to your account</h1>
        <input
          type="username"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <button type="submit">Log in</button>
      </form>
    </div>
  );
}

export default Login;
