import React, { useState } from "react";
import "./LoginRegister.css"; // optional if you have styles

function LoginRegister() {
  const [isLogin, setIsLogin] = useState(true);
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
  });

  // Handlers to switch forms
  const showLogin = () => setIsLogin(true);
  const showRegister = () => setIsLogin(false);

  // Handle login
  const handleLogin = () => {
    const { email, password } = loginData;
    if (email && password) {
      alert(`Login Successful!\nEmail: ${email}`);
    } else {
      alert("Please fill in all fields.");
    }
  };

  // Handle register
  const handleRegister = () => {
    const { name, email, password, confirm } = registerData;

    if (!name || !email || !password || !confirm) {
      alert("Please fill in all fields.");
      return;
    }
    if (password !== confirm) {
      alert("Passwords do not match!");
      return;
    }

    alert(`Registration Successful!\nWelcome, ${name}`);
    setIsLogin(true);
  };

  return (
    <div className="form-container">
      <h2 id="form-title">{isLogin ? "Login" : "Register"}</h2>

      {isLogin ? (
        // Login Form
        <div id="login-form" className="active">
          <input
            type="email"
            placeholder="Email"
            value={loginData.email}
            onChange={(e) =>
              setLoginData({ ...loginData, email: e.target.value })
            }
          />
          <input
            type="password"
            placeholder="Password"
            value={loginData.password}
            onChange={(e) =>
              setLoginData({ ...loginData, password: e.target.value })
            }
          />
          <button onClick={handleLogin}>Login</button>
          <p>
            Don’t have an account?{" "}
            <span className="link" onClick={showRegister}>
              Register here
            </span>
          </p>
        </div>
      ) : (
        // Register Form
        <div id="register-form" className="active">
          <input
            type="text"
            placeholder="Name"
            value={registerData.name}
            onChange={(e) =>
              setRegisterData({ ...registerData, name: e.target.value })
            }
          />
          <input
            type="email"
            placeholder="Email"
            value={registerData.email}
            onChange={(e) =>
              setRegisterData({ ...registerData, email: e.target.value })
            }
          />
          <input
            type="password"
            placeholder="Password"
            value={registerData.password}
            onChange={(e) =>
              setRegisterData({ ...registerData, password: e.target.value })
            }
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={registerData.confirm}
            onChange={(e) =>
              setRegisterData({ ...registerData, confirm: e.target.value })
            }
          />
          <button onClick={handleRegister}>Register</button>
          <p>
            Already have an account?{" "}
            <span className="link" onClick={showLogin}>
              Login here
            </span>
          </p>
        </div>
      )}
    </div>
  );
}

export default LoginRegister;
