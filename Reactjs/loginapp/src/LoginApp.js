import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginApp() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault(); // ✅ prevents page refresh

    const username = e.target.username.value;
    const password = e.target.password.value;

    if (username === "admin" && password === "admin@123") {
      setIsLoggedIn(true);
      setUser(username);
      navigate("/dashboard"); // ✅ navigate after login
    } else {
      alert("Invalid username or password...");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser("");
    navigate("/"); // ✅ optional — back to login page
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      {!isLoggedIn ? (
        <form onSubmit={handleLogin}>
          <h2>Login</h2>
          <input type="text" name="username" placeholder="Username" required />
          <br />
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
          />
          <br />
          <button type="submit">Login</button>
        </form>
      ) : (
        <div>
          <h2>Welcome, {user}!</h2>
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}
    </div>
  );
}
