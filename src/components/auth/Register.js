import axios from "axios";
import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import "../../styles/Login.css";


function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVerify, setPasswordVerify] = useState("");

  const { getLoggedIn } = useContext(AuthContext);
  const history = useHistory();
  async function register(e) {
    e.preventDefault();

    try {
      const registerData = {
        username,
        password,
        passwordVerify,
      };

       await axios.post("http://localhost:5000/auth/", registerData);

      await getLoggedIn();
      history.push("/feeling");
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div class="container">
      <form onSubmit={register} class= "login">
      <h1>Register a new account</h1>
        <input
          type="username"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          minLength="4" 
          maxLength="12"
          
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          minLength="8" 
          maxLength="50"
        />
        <input
          type="password"
          placeholder="Verify your password"
          onChange={(e) => setPasswordVerify(e.target.value)}
          value={passwordVerify}
          minLength="8" 
          maxLength="50"
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
