import React, { useState } from "react";



function LoginRegisterModal({ open, onClose }) {
  const [isLogin, setIsLogin] = useState(true);

  if (!open) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        background: "rgba(0,0,0,0.2)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999
      }}
    >
      <div
        style={{
            background: "rgba(255, 255, 255, 0.45)",
            backdropFilter:" blur(20px)",
            WebkitBackdropFilter: "blur(8px)",
            animation:"fadeIn 5s ease",
            padding: "20px",
            width: "400px",
            borderRadius: "10px",
            boxShadow:"5px 5px 15px rgba(0,0,0,0.5) "

        }}
      >
        
        <h2 style={{ textAlign: "center",color:"black",fontSize:"36px",marginBottom:"25px" }}>
          {isLogin ? "Welcome Back" : "Register"}
        </h2>

        
        {isLogin && (
          <form>
            <input
              type="email"
              placeholder="Email"
              required
              style={{ width: "100%", padding: "10px", marginBottom: "10px",borderRadius:"30px", border:"none" }}
              
            />
            

            <input
              type="password"
              placeholder="Password"
              required
              style={{ width: "100%", padding: "10px", marginBottom: "10px",borderRadius:"30px", border:"none"}}
            />
            
            <button
              style={{
                width: "100%",
                padding: "10px",
                background: "blue",
                color: "white",
                border: "none",
                borderRadius: "30px",
                cursor: "pointer",
                marginBottom:"20px"
              }}
            >
              Login
            </button>
          </form>
        )}

        
        {!isLogin && (
          <form>
            <input
              type="text"
              placeholder="Username"
              required
              style={{ width: "100%", padding: "10px", marginBottom: "10px",borderRadius:"30px",border:"none"}}
            />

            <input
              type="email"
              placeholder="Email"
              required
              style={{ width: "100%", padding: "10px", marginBottom: "10px",borderRadius:"30px",border:"none" }}
            />


            <input
              type="password"
              placeholder="Password"
              required
              style={{ width: "100%", padding: "10px", marginBottom: "10px",borderRadius:"30px",border:"none"}}
            />

            <button
              style={{
                width: "100%",
                padding: "10px",
                background: "green",
                color: "white",
                border: "none",
                borderRadius: "30px",
                cursor: "pointer",
                fontWeight:"bold",
                marginBottom:"20px"
              }}
            >
              Register
            </button>
          </form>
        )}

        
        <p style={{ textAlign: "center", marginTop: "10px",color:"white" }}>
          {isLogin ? (
            <>
              Don’t have an account?{" "}
              <span
                onClick={() => setIsLogin(false)}
                style={{ color: "blue", cursor: "pointer", }}
              >
                Register
              </span>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <span
                onClick={() => setIsLogin(true)}
                style={{ color: "blue", cursor: "pointer" }}
              >
                Login
              </span>
            </>
          )}
        </p>

      
        <button
          onClick={onClose}
          style={{
            marginTop: "10px",
            width: "100%",
            padding: "10px",
            background: "red",
            color: "white",
            border: "none",
            borderRadius: "30px",
            cursor: "pointer",
            fontWeight:"bold"
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default LoginRegisterModal;
