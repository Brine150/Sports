// src/Pages/Dashboard.jsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({ username: "Player" });
  const [latestScores, setLatestScores] = useState([]);
  const [upcomingMatches, setUpcomingMatches] = useState([]);

  // ---------------- Sample Data ----------------
  const sampleLatestScores = [
    { 
      match: "Liverpool vs Manchester City", 
      score: "2 - 1", 
      date: "2025-12-14", 
      logos: [
        "https://upload.wikimedia.org/wikipedia/en/0/0c/Liverpool_FC.svg", 
        "https://upload.wikimedia.org/wikipedia/en/c/cf/Manchester_City_FC_badge.svg"
      ] 
    },
    { 
      match: "Chelsea vs Arsenal", 
      score: "1 - 3", 
      date: "2025-12-13", 
      logos: [
        "https://upload.wikimedia.org/wikipedia/en/c/cc/Chelsea_FC.svg", 
        "https://upload.wikimedia.org/wikipedia/en/5/53/Arsenal_FC.svg"
      ] 
    },
  ];

  const sampleUpcomingMatches = [
    { 
      match: "Manchester United vs Tottenham", 
      date: "2025-12-16", 
      time: "18:00", 
      logos: [
        "https://upload.wikimedia.org/wikipedia/en/7/7a/Manchester_United_FC_crest.svg", 
        "https://upload.wikimedia.org/wikipedia/en/b/b4/Tottenham_Hotspur.svg"
      ] 
    },
    { 
      match: "Everton vs Leicester City", 
      date: "2025-12-17", 
      time: "20:00", 
      logos: [
        "https://upload.wikimedia.org/wikipedia/en/7/7c/Everton_FC_logo.svg", 
        "https://upload.wikimedia.org/wikipedia/en/6/63/Leicester_City_crest.svg"
      ] 
    },
  ];

  // ---------------- Effect ----------------
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) navigate("/"); // redirect if not logged in

    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) setUser(storedUser);

    setLatestScores(sampleLatestScores);
    setUpcomingMatches(sampleUpcomingMatches);
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <div style={{ padding: "40px", fontFamily: "Arial, sans-serif", background: "#f4f4f9", minHeight: "100vh" }}>
      
      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "30px" }}>
        <h1 style={{ fontSize: "32px", color: "#1e3a8a" }}>Sports Dashboard</h1>
        <button
          onClick={handleLogout}
          style={{
            padding: "10px 20px",
            background: "red",
            color: "white",
            border: "none",
            borderRadius: "10px",
            cursor: "pointer",
            fontWeight: "bold"
          }}
        >
          Logout
        </button>
      </div>

      {/* Welcome Banner */}
      <div style={{
        background: "#1e3a8a",
        color: "white",
        padding: "20px",
        borderRadius: "10px",
        textAlign: "center",
        marginBottom: "30px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.2)"
      }}>
        <h2>Welcome, {user.username}!</h2>
        <p>Stay up to date with scores, upcoming matches, and your favorite teams.</p>
      </div>

      {/* Quick Links */}
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", marginBottom: "30px" }}>
        {["View All Scores", "Upcoming Matches", "Favorite Teams"].map((title, i) => (
          <div key={i} style={{
            flex: "1 1 200px",
            background: i===0 ? "#2563eb" : i===1 ? "#16a34a" : "#d97706",
            color: "white",
            padding: "20px",
            borderRadius: "10px",
            textAlign: "center",
            cursor: "pointer",
            boxShadow: "0 4px 8px rgba(0,0,0,0.2)"
          }}>
            <h3>{title}</h3>
          </div>
        ))}
      </div>

      {/* Latest Scores */}
      <div style={{ marginBottom: "30px" }}>
        <h2 style={{ color: "#1e3a8a", marginBottom: "15px" }}>Latest Scores</h2>
        <table style={{ width: "100%", borderCollapse: "collapse", background: "white", borderRadius: "8px", overflow: "hidden", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>
          <thead style={{ background: "#1e3a8a", color: "white" }}>
            <tr>
              <th style={{ padding: "12px", textAlign: "left" }}>Match</th>
              <th style={{ padding: "12px", textAlign: "left" }}>Score</th>
              <th style={{ padding: "12px", textAlign: "left" }}>Date</th>
            </tr>
          </thead>
          <tbody>
            {latestScores.map((item, index) => (
              <tr key={index} style={{ borderBottom: "1px solid #ddd", verticalAlign: "middle" }}>
                <td style={{ padding: "12px", display: "flex", alignItems: "center", gap: "10px" }}>
                  <img src={item.logos[0]} alt="team1" style={{ width: "40px", height: "40px", borderRadius: "50%" }} />
                  <span style={{color:"black"}}>{item.match}</span>
                  <img src={item.logos[1]} alt="team2" style={{ width: "40px", height: "40px", borderRadius: "50%" }} />
                </td>
                <td style={{ padding: "12px", color:"black" }}>{item.score}</td>
                <td style={{ padding: "12px", color:"black" }}>{item.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Upcoming Matches */}
      <div style={{ marginBottom: "30px" }}>
        <h2 style={{ color: "#1e3a8a", marginBottom: "15px" }}>Upcoming Matches</h2>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {upcomingMatches.map((match, index) => (
            <li key={index} style={{
              background: "white",
              marginBottom: "10px",
              padding: "15px",
              borderRadius: "8px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              color:"black"
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <img src={match.logos[0]} alt="team1" style={{ width: "40px", height: "40px", borderRadius: "50%" }} />
                <span style={{ fontWeight: "bold" }}>{match.match}</span>
                <img src={match.logos[1]} alt="team2" style={{ width: "40px", height: "40px", borderRadius: "50%" }} />
              </div>
              <span style={{color:"black"}}>{match.date} | {match.time}</span>
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
};

export default Dashboard;
