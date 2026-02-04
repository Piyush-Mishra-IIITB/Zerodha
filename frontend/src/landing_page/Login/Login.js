import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../signup/Signup.css";
import api from "../../api";
const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await api.post("/login", {
        email,
        password,
      });

      console.log("LOGIN RESPONSE:", res.data);

      // ✅ Save token
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("username", res.data.name);


      // ✅ Confirm saved
      console.log("TOKEN STORED:", localStorage.getItem("token"));

      // redirect to dashboard
      window.location.href = "http://localhost:3002";

    } catch (err) {
      setError(err.response?.data?.error || "Login failed");
    }
  };

  return (
    <div className="signup-container">
      <h2>Login</h2>

      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Login</button>

        {error && <p className="signup-error">{error}</p>}
      </form>
    </div>
  );
};

export default Login;
